import { updateProfile } from 'firebase/auth';
import { useState, useEffect, useCallback } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { doc, setDoc, getDoc, updateDoc, onSnapshot, collection } from 'firebase/firestore';

import { db, auth, storage } from 'src/utils/firebase';

import { toast } from 'src/components/snackbar';

// ----------------------------------------------------------------------

export function useUsersData() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unsubscribe = () => {};

    setLoading(true);
    const usersRef = collection(db, 'users');

    unsubscribe = onSnapshot(
      usersRef,
      (snapshot) => {
        const fetchedUsers = snapshot.docs.map((docSnapshot) => ({
          id: docSnapshot.id,
          ...docSnapshot.data(),
        }));
        setUsers(fetchedUsers);
        setLoading(false);
      },
      (error) => {
        console.error('Error fetching users:', error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const _updateUsers = useCallback((newUsers) => {
    setUsers(newUsers);
  }, []);

  return { users, loading, _updateUsers };
}

export function useUserById(userId) {
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userId) {
      setUserProfile(null);
      setLoading(false);
      return undefined;
    }

    setLoading(true);
    setError(null);

    const userRef = doc(db, 'users', userId);
    const unsubscribe = onSnapshot(
      userRef,
      (snapshot) => {
        if (snapshot.exists()) {
          setUserProfile({
            id: snapshot.id,
            ...snapshot.data(),
          });
        } else {
          setError('User not found');
          setUserProfile(null);
        }
        setLoading(false);
      },
      (_error) => {
        console.error('Error fetching user:', _error);
        setError(_error.message);
        setLoading(false);
      }
    );

    // Cleanup function always returns void
    return () => {
      unsubscribe();
    };
  }, [userId]);

  return { userProfile, loading, error };
}

export async function updateUsers(data) {
  try {
    // Vérifie si l'utilisateur est connecté
    if (!auth.currentUser) {
      throw new Error('No authenticated user found');
    }

    const userId = auth.currentUser.uid;
    const { photoURL, displayName, ...otherData } = data;
    let updatedPhotoURL = photoURL;

    // Gestion du téléchargement de l'avatar si c'est un nouveau fichier
    if (photoURL instanceof File) {
      // Créer un nom de fichier unique pour l'avatar
      const fileExtension = photoURL.name.split('.').pop();
      const fileName = `avatars/${userId}/avatar.${fileExtension}`;
      const storageRef = ref(storage, fileName);

      // Upload du fichier
      await uploadBytes(storageRef, photoURL);

      // Récupération de l'URL de téléchargement
      updatedPhotoURL = await getDownloadURL(storageRef);
    }

    // Mise à jour du profil Firebase Auth
    await updateProfile(auth.currentUser, {
      displayName,
      photoURL: updatedPhotoURL,
    });

    // Préparation des données à mettre à jour dans Firestore
    const userData = {
      ...otherData,
      displayName,
      photoURL: updatedPhotoURL,
      updatedAt: new Date().toISOString(),
      uid: userId, // Ajouter l'uid pour référence
      email: auth.currentUser.email, // Ajouter l'email pour référence
    };

    // Référence au document utilisateur
    const userRef = doc(db, 'users', userId);

    // Vérifier si le document existe
    const docSnap = await getDoc(userRef);

    if (!docSnap.exists()) {
      // Si le document n'existe pas, le créer avec setDoc
      await setDoc(userRef, {
        ...userData,
        createdAt: new Date().toISOString(),
      });
      toast.success('Profile created successfully!');
    } else {
      // Si le document existe, le mettre à jour
      await setDoc(userRef, userData, { merge: true });
      toast.success('Profile updated successfully!');
    }

    return {
      success: true,
      data: userData,
    };

  } catch (error) {
    console.error('Error updating user profile:', error);
    toast.error(error.message || 'Failed to update profile');

    return {
      success: false,
      error: error.message,
    };
  }
}

export async function updateFastUsers({ currentUser, data }) {
  // Crée un objet de données utilisateur
  const userData = { ...data };

  // Référence à la collection 'users' dans Firestore
  const usersRef = collection(db, 'users');

  try {
    // Crée une référence de document pour un nouvel utilisateur ou un utilisateur existant
    const userRef = currentUser?.id ? doc(usersRef, currentUser.id) : doc(usersRef);

    // Met à jour ou crée les données utilisateur dans Firestore
    if (currentUser?.id) {
      await updateDoc(userRef, userData);
      toast.success('Mise à jour réussie !');
    } else {
      await setDoc(userRef, userData);
      toast.success('Création réussie !');
    }
  } catch (error) {
    console.error('Erreur lors de la mise à jour/création de l\'utilisateur:', error);
    toast.error('Une erreur est survenue lors de l\'opération');
  }
}
