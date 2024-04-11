import React from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import { RouterLink } from "src/routes/components";

import useFetchPosts from "src/hooks/use-fetchPosts";

export default function MarketingTestView() {

  const { posts, isPostsLoading, postsError } = useFetchPosts();

  return (
    <>
      <div>Test</div>
      {isPostsLoading && <div>Loading...</div>}
      {postsError && <div>Error: {postsError.message}</div>}
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link component={RouterLink} to={`/marketing/test/${post.id}`}>
              <h2>{post.title}</h2>
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
