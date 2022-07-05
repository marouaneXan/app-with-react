import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AddBlog from "./components/AddBlog";
import BlogDetails from "./components/BlogDetails";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route path='/AddBlog'>
              <AddBlog/>
            </Route>
            <Route path='/Blog/:id'>
              <BlogDetails/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
