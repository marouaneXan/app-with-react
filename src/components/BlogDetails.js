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
    <div>
      <div className="blog-details">
        <h2>Blog {id}</h2>
        <div className="blog-preview" key={blog.id}>
          {error && <div>{error}</div>}
          {isPanding && <div>Loading...</div>}
          <h2>{blog.title}</h2>
          <p>Writen By {blog.author}</p>
          <p>{blog.body}</p>
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
