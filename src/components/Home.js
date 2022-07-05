import BlogList from "./BlogList";
import { useState, useEffect } from "react";
const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [isPanding, setisPanding] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    setTimeout(() => {
      fetch(" http://localhost:8000/blogs")
        .then((res) => {
          if(!res.ok){
            throw Error('could not fetch the data for the  resource')
          }
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setisPanding(false);
        })
        .catch(e=>{
          setisPanding(false);
          setError(e.message)
        })
    }, 1000);
  }, []);
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPanding && <div>Loading...</div>}
      {blogs.length > 0 && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
