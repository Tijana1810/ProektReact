import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from "./Login";
import Register from "./Register";
import Books from "./Books";

const App = () => {
  return (
    <Router>
      <div>
        <h1>My Library</h1>

        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/login">Login</Link> |{" "}
          <Link to="/register">Register</Link> |{" "}
          <Link to="/books">Books</Link>
        </nav>

        <Routes>
          <Route path="/" element={<h2>Welcome to my library!</h2>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/books" element={<Books />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;