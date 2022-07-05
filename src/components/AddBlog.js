import { useState } from "react";

const AddBlog = () => {
    const [title,setTitle]=useState('')
    const [author,setAuthor]=useState('')
    const [body,setBody]=useState('')
  return (
    <div className="container">
      <h2>Add a new blog</h2>
      <form>
        <div className="mb-3">
          <label for="title" className="form-label">
            Blog Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
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
            onChange={(e)=>setAuthor(e.target.value)}
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
            onChange={(e)=>setBody(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddBlog;
