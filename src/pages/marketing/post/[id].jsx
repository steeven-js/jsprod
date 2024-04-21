import { useParams } from 'react-router';
import { Helmet } from 'react-helmet-async';

import useFetchPost from 'src/hooks/use-fetchPost';
import useFetchPosts from 'src/hooks/use-fetchPosts';

import MarketingPostView from 'src/sections/_marketing/view/marketing-post-view';

// ----------------------------------------------------------------------

export default function MarketingPostPage() {

  const { id } = useParams();

  const { post, authorName, authorAvatar, authorBio, authorSince, tags, authorRole } = useFetchPost(id);

  const { posts } = useFetchPosts();

  return (
    <>
      <Helmet>
        <title> Marketing: Blog Post</title>
      </Helmet>

      <MarketingPostView
        post={post}
        authorName={authorName}
        authorAvatar={authorAvatar}
        authorBio={authorBio}
        authorSince={authorSince}
        tags={tags}
        authorRole={authorRole}
        posts={posts}
      />
    </>
  );
}
