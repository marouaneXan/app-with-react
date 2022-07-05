import { useState } from "react";
const Home = () => {
  const [blogs,setBlogs]=useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ]);

  return (
    <div className="content">
      {
        blogs.map(blog=>(
          <div className="blog-preview" key={blog.id}>
            <h2>{blog.title}</h2>
            <p>Writen By {blog.author}</p>
          </div>
        ))
      }
    </div>
  );
};

export default Home;
