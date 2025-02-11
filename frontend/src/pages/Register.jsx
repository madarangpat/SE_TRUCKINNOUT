import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

function Register() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        contactNumber: "",
        username: "",
        password: "",
        confirmPassword: "",
    });

    const [profilePicture, setProfilePicture] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleProfilePicture = (e) => {
        setProfilePicture(e.target.files[0]);
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            setLoading(false);
            return;
        }

        try {
            const formDataToSend = new FormData();
            Object.keys(formData).forEach((key) => {
                formDataToSend.append(key, formData[key]);
            });

            if (profilePicture) {
                formDataToSend.append("profilePicture", profilePicture);
            }

            await api.post("/register/", formDataToSend, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            alert("Registration successful! You can now log in.");
            navigate("/login");
        } catch (error) {
            alert("Registration failed: " + (error.response?.data?.message || error.message));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="register-container">
            <div className="register-card">
                <h1 className="register-title">ADD ACCOUNT</h1>
                <p className="register-subtitle">Add another member to the Big C Family!</p>

                <label className="profile-upload">
                    <input type="file" accept="image/*" onChange={handleProfilePicture} hidden />
                    <div className="profile-circle">
                        {profilePicture ? (
                            <img src={URL.createObjectURL(profilePicture)} alt="Profile" className="profile-preview" />
                        ) : (
                            "Click to Add Profile Picture"
                        )}
                    </div>
                </label>

                <form className="register-form" onSubmit={handleRegister}>
                    <div className="form-group">
                        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name*" required />
                        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name*" required />
                    </div>
                    <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} placeholder="Contact Number*" required />
                    <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username*" required />
                    <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password*" required />
                    <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder="Confirm Password*" required />

                    <button type="submit" className="register-button" disabled={loading}>
                        {loading ? "Registering..." : "Create New Account"}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Register;
