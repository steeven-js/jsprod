import { useState, useEffect } from 'react';
import {
  doc,
  where,
  endAt,
  query,
  limit,
  getDoc,
  orderBy,
  startAt,
  collection,
  onSnapshot,
} from 'firebase/firestore';

import { db } from 'src/utils/firebase';

export function usePosts(sortBy = 'latest', searchQuery = '', publish = 'all') {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let unsubscribe = () => {};

    const q = searchQuery
      ? query(
          collection(db, 'posts'),
          orderBy('title'),
          startAt(searchQuery),
          endAt(`${searchQuery}\uf8ff`),
          limit(10)
        )
      : query(
          collection(db, 'posts'),
          ...[
            orderBy(sortBy === 'popular' ? 'totalViews' : 'createdAt', sortBy === 'oldest' ? 'asc' : 'desc'),
            limit(20),
            ...(publish !== 'all' ? [where('publish', '==', publish)] : []),
          ]
        );

    unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        const fetchedPosts = querySnapshot.docs.map((_doc) => ({
          id: _doc.id,
          ..._doc.data(),
        }));
        setPosts(fetchedPosts);
        setLoading(false);
      },
      (_error) => {
        console.error('Error fetching posts:', _error);
        setLoading(false);
        setError(_error);
      }
    );

    return () => unsubscribe();
  }, [sortBy, searchQuery, publish]);

  return { posts, loading, error };
}

export function useLatestPosts(count = 4) {
  const [latestPosts, setLatestPosts] = useState([]);
  const [latestPostsLoading, setLatestPostsLoading] = useState(true);
  const [latestPostsError, setLatestPostsError] = useState(null);

  useEffect(() => {
    const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'), limit(count));

    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        const fetchedPosts = querySnapshot.docs.map((_doc) => ({
          id: _doc.id,
          ..._doc.data(),
        }));
        setLatestPosts(fetchedPosts);
        setLatestPostsLoading(false);
      },
      (error) => {
        console.error('Error fetching latest posts:', error);
        setLatestPostsLoading(false);
        setLatestPostsError(error);
      }
    );

    return () => unsubscribe();
  }, [count]);

  return { latestPosts, latestPostsLoading, latestPostsError };
}

export function useFetchPostById(id) {
  const [postById, setPostById] = useState(null);
  const [postByIdLoading, setPostByIdLoading] = useState(true);
  const [postError, setPostError] = useState(null);

  useEffect(() => {
    let unsubscribe = () => {};

    if (id) {
      const docRef = doc(db, 'posts', id);

      unsubscribe = onSnapshot(
        docRef,
        (docSnapshot) => {
          if (docSnapshot.exists()) {
            setPostById({ id: docSnapshot.id, ...docSnapshot.data() });
            setPostError(null);
          } else {
            setPostError('Post not found');
            setPostById(null);
          }
          setPostByIdLoading(false);
        },
        (error) => {
          console.error('Error fetching post:', error);
          setPostError(error.message);
          setPostByIdLoading(false);
        }
      );
    } else {
      setPostByIdLoading(false);
    }

    return () => unsubscribe();
  }, [id]);

  return { postById, postByIdLoading, postError };
}

export const usePostCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Récupérer les catégories
  useEffect(() => {
    const q = query(collection(db, 'postCategories'), orderBy('name'));

    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        const fetchedCategories = querySnapshot.docs.map((snapshot) => ({
          id: snapshot.id,
          ...snapshot.data(),
        }));
        setCategories(fetchedCategories);
        setLoading(false);
      },
      (fetchError) => {
        console.error('Erreur lors de la récupération des catégories:', fetchError);
        setError(fetchError);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  // Récupérer une catégorie par ID
  const getCategoryById = async (categoryId) => {
    try {
      const categoryRef = doc(db, 'postCategories', categoryId);
      const categorySnap = await getDoc(categoryRef);

      if (categorySnap.exists()) {
        return {
          id: categorySnap.id,
          ...categorySnap.data(),
        };
      }
      throw new Error('Catégorie non trouvée');
    } catch (err) {
      console.error('Erreur lors de la récupération de la catégorie:', err);
      throw err;
    }
  };

  return {
    categories,
    loading,
    error,
    getCategoryById,
  };
};
