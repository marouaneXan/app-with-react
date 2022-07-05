import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
function BlogDetails() {
  const { id } = useParams();
  const {
    data: blog,
    isPanding,
    error,
  } = useFetch(`http://localhost:8000/blogs/${id}`);
  return (
    <div className="blog-details">
      {error && <div>{error}</div>}
      {isPanding && <div>Loading...</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Writen By: {blog.author}</p>
          <p>{blog.body}</p>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;
