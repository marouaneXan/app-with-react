import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
const BlogList = ({ blogs, title }) => {
  const [success, setSuccess] = useState();
  const history=useHistory()
  const handleDelete = (id) => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "DELETE",
    }).then(() => {
      setTimeout(()=>{
        setSuccess("Blog deleted successfully");
      },1000)
    });
  };
  return (
    <div className="blog-preview">
      {success &&
          <div className="alert alert-danger" role="alert">
            {success}
          </div>
      }
      <h1>{title}</h1>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Writen By {blog.author}</p>
          <Link to={`/blog/${blog.id}`} className="btn btn-success">
            Blog Details
          </Link>
          <button
            onClick={() => handleDelete(blog.id)}
            className="btn btn-danger"
          >
            Delete Blog
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
