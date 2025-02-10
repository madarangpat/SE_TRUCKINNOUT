import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api"; // Axios instance configured for the backend

function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault(); // Prevent form default behavior
        setLoading(true); // Show loading state

        try {
            // Send POST request to /register/ endpoint
            await api.post("/register/", { username, email, password });
            alert("Registration successful! You can now log in.");
            navigate("/login"); // Redirect to login page
        } catch (error) {
            // Display error message
            alert(
                "Registration failed: " +
                (error.response?.data?.message || error.message)
            );
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    return (
        <div className="register-container">
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
                <div className="form-group">
                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter username"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email"
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                        required
                    />
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? "Registering..." : "Register"}
                </button>
            </form>
            <p>
                Already have an account?{" "}
                <span
                    onClick={() => navigate("/login")}
                    style={{ color: "blue", cursor: "pointer" }}
                >
                    Log in
                </span>
            </p>
        </div>
    );
}

export default Register;
