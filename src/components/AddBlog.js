import { useState } from "react";
import { useHistory } from "react-router-dom";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [isPanding, setisPanding] = useState(false);
  const [success,setSuccess]=useState('')
  const history=useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();
    setisPanding(true);
    const blog = { title, author, body };
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    }).then(() => {
      setSuccess('Added New Blog Successfully')
      setTimeout(()=>{
        setisPanding(false);
        history.push('/');
      },1300)
    });
  };
  return (
    <div className="container">
      {success && <div className="alert alert-success" role='alert'>{success}</div>}
      <h2>Add new blog</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="title" className="form-label">
            Blog Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="exampleInpuauthortPassword1" className="form-label">
            Blog Author
          </label>
          <input
            type="text"
            className="form-control"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="Body" className="form-label">
            Blog Body
          </label>
          <textarea
            type="text"
            className="form-control"
            id="Body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>
        </div>
        {!isPanding ? (
          <button type="submit" className="btn btn-primary">
            Add
          </button>
        ) : (
          <button disabled type="submit" className="btn btn-primary">
            Adding...
          </button>
        )}
      </form>
    </div>
  );
};

export default AddBlog;
