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
        // Filtrer les posts publiés et récupérer les posts que si publish est égal à 'published'
        const filteredPosts = fetchedPosts.filter((post) => post.publish === 'published');
        setPosts(filteredPosts);
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
        // Filtrer les posts publiés et récupérer les posts que si publish est égal à 'published'
        const filteredPosts = fetchedPosts.filter((post) => post.publish === 'published');
        setLatestPosts(filteredPosts);
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
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    if (!id) {
      setLoading(false);
      return undefined;
    }

    const postRef = doc(db, 'posts', id);

    // Première récupération immédiate avec getDoc
    const fetchInitialData = async () => {
      try {
        const docSnap = await getDoc(postRef);
        if (docSnap.exists()) {
          setPost({ id: docSnap.id, ...docSnap.data() });
        } else {
          setError('Post not found');
          setPost(null);
        }
      } catch (err) {
        console.error('Error fetching post:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialData();

    // Mise en place de l'écoute en temps réel
    const unsubscribe = onSnapshot(
      postRef,
      (docSnapshot) => {
        if (docSnapshot.exists()) {
          setPost({ id: docSnapshot.id, ...docSnapshot.data() });
          setError(null);
        } else {
          setError('Post not found');
          setPost(null);
        }
        setLoading(false);
      },
      (err) => {
        console.error('Error in snapshot:', err);
        setError(err.message);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [id]);

  return { post, loading, error };
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
