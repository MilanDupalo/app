import { Switch, Route, Link, BrowserRouter as Router } from 'react-router-dom';
import AppPosts from './pages/AppPosts'
import AddPost from './pages/AddPost'
import SinglePost from './pages/SinglePost'
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>

      <h1 className="logo">Blog-post</h1>
        <nav>
          <ul className="navbar">
            <li>
              <Link className="nav-link" to='/posts'>All Posts</Link>
            </li>
            <li>
              <Link className="nav-link" to='/add'>Add Post</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path='/posts'>
            <AppPosts />
          </Route>
          <Route exact path='/add'>
            <AddPost/>
          </Route>
          <Route path='/post/:id'>
            <SinglePost/>
          </Route>
          <Route path='/edit/:id'>
            <AddPost/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
