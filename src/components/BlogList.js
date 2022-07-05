const BlogList = ({blogs}) => {
  return (
    <div className="blog-preview">
        {
        blogs.map(blog=>(
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Writen By {blog.author}</p>
          </div>
        ))
      }
    </div>
  )
}

export default BlogList