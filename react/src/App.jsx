import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./Login";
import Register from "./Register";
import Navbar from './Navbar';
import Books from './Books';

const App = () => {
  return (
    <Router>
      <div>
        <h1>My Library</h1>

        <Navbar />

        <Routes>
          <Route path="/" element={<h2>Welcome to my library!</h2>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/books" element={<Books />} /> {/* Додадено е за да се прикажуваат книгите */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
