import { Link } from "react-router-dom"
const BlogList = ({blogs,title}) => {
  const handleDelete=()=>{
    fetch('')
  }
  return (
    <div className="blog-preview">
        <h1>{title}</h1>
        {
        blogs.map(blog=>(
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Writen By {blog.author}</p>
            <Link to={`/blog/${blog.id}`} className="btn btn-success">Blog Details</Link>
            <button onClick={()=>handleDelete(blog.id)}  className="btn btn-danger">Delete Blog</button>
          </div>
        ))
      }
    </div>
  )
}

export default BlogList