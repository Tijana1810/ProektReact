import { useState } from "react";
import styles from './Register.module.css'; 

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [selectedBook, setSelectedBook] = useState(""); 
  const [error, setError] = useState(null); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      username,
      email,
      password,
      selectedBook
    };

    try {
      const response = await fetch("http://localhost:5000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Something went wrong during registration!");
      }

      const result = await response.json();
      console.log("User Registered: ", result);
      alert("Registration Successful!");
    
      setUsername("");
      setEmail("");
      setPassword("");
      setSelectedBook(""); 
    } catch (error) {
      console.error("Error: ", error);
      setError("Failed to register user. Please try again.");
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <select 
          value={selectedBook}
          onChange={(e) => setSelectedBook(e.target.value)}
          className={styles["input-field"]} 
        >
          <option value="">Select a Book</option>
          <option value="Harry Potter">Harry Potter</option>
          <option value="Twilight">Twilight</option>
          <option value="The fault in our stars">The fault in our stars</option>
          <option value="Divergent">Divergent</option>
          <option value="Vampire academy">Vampire academy</option>
          <option value="To Kill a Mockingbird">To Kill a Mockingbird</option>
        </select>
        
        <button type="submit">Sign up</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Register;
