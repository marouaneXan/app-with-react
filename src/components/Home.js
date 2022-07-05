import BlogList from "./BlogList";
import useFetch from '../hooks/useFetch'
const Home = () => {
  const {data:blogs,isPanding,error}=useFetch('http://localhost:8000/blogs')
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPanding && <div>Loading...</div>}
      {blogs.length > 0 && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
