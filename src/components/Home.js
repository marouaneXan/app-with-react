import BlogList from "./BlogList";
import { useState } from "react";
const Home = () => {
  const [blogs,setBlogs]=useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ]);

  //function to delete a blog
  const handelDelete=(id)=>{
    const newBlogs=blogs.filter(blog=>blog.id!==id)
    setBlogs(newBlogs)
}

  return (
    <div className="content">
      {
        blogs.length>0  ? <BlogList blogs={blogs} title='All Blogs' handelDelete={handelDelete}/> : <h2>There no Blog Yet</h2>
      } 
    </div>
  );
};

export default Home;
