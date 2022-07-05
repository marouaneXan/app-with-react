const BlogList = ({blogs,title}) => { 
    
  return (
    <div className="blog-preview">
        <h1>{title}</h1>
        {
        blogs.map(blog=>(
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Writen By {blog.author}</p>
            <button  className="btn btn-danger">Delete</button>
          </div>
        ))
      }
    </div>
  )
}

export default BlogList