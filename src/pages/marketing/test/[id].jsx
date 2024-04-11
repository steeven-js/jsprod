import { useParams } from 'react-router';
import ReactMarkdown from "react-markdown";
import { Helmet } from 'react-helmet-async';

import useFetchPost from 'src/hooks/use-fetchPost';




// ----------------------------------------------------------------------

export default function TestPage() {
  const { id } = useParams();

  const { post, isPostLoading, postError  } = useFetchPost(id);

  // console.log('symptom:', symptom.plants);

  return (
    <>
      <Helmet>
        <title> Post </title>
      </Helmet>

      {/* {isLoading ? <SplashScreen /> : <SymptomeView id={id} data={symptom} />} */}

      <div>Post</div>

      {isPostLoading && <div>Loading...</div>}
      {postError && <div>Error: {postError.message}</div>}
      {post && (
        <div>
          <h2>{post.title}</h2>
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      )}

    </>
  );
}
