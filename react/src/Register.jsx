import { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // За грешки

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      username,
      email,
      password
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
      // Resetiraj полја по успешна регистрација
      setUsername("");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Error: ", error);
      setError("Failed to register user. Please try again.");
    }
  };

  return (
    <div>
      <h2>Registration</h2>
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
        <button type="submit">Sign up</button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default Register;
