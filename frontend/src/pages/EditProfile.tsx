import { useNavigate } from "react-router-dom";
import "../styles/editProfile.css";
import { useState, useEffect } from "react";

function EditProfile() {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        contactNumber: "",
        role: "",
    });

    useEffect(() => {
        // Fetch user data from Django backend
        const fetchUserData = async () => {
            try {
                const response = await fetch("http://localhost:8000/api/user-profile/", {
                    method: "GET",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                if (response.ok) {
                    const data = await response.json();
                    setUserData({
                        firstName: data.first_name,
                        lastName: data.last_name,
                        username: data.username,
                        password: "", // Do not populate password for security reasons
                        contactNumber: data.contact_number,
                        role: data.role,
                    });
                } else {
                    console.error("Failed to fetch user data");
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };
        
        fetchUserData();
    }, []);

    return (
        <div className="edit-profile-container">
            <aside className="sidebar">
                <nav className="menu">
                    <button className="menu-item" onClick={() => navigate("/")}>Dashboard</button>
                    <button className="menu-item">View Deliveries</button>
                    <button className="menu-item">Manage Payroll</button>
                    <button className="menu-item">Settings</button>
                    <button className="menu-item">Edit Profile</button>
                    <button className="menu-item logout" onClick={() => navigate("/login")}>Logout</button>
                </nav>
            </aside>
            <main className="edit-profile-content">
                <h2>EDIT PROFILE</h2>
                <form className="profile-form">
                    <label>First Name</label>
                    <input type="text" placeholder="Enter new first name" />
                    
                    <label>Last Name</label>
                    <input type="text" placeholder="Enter new last name" />
                    
                    <label>Username</label>
                    <input type="text" placeholder="Enter new username" />
                    
                    <label>Password</label>
                    <input type="password" placeholder="Enter new password" />
                    
                    <label>Contact Number</label>
                    <input type="text" placeholder="Enter new contact number" />
                    
                    <label>Role</label>
<input type="text" value={`Current Role: ${userData.role}`} disabled />
                    
                    <button type="submit" className="save-button">Save Changes</button>
                </form>
            </main>
        </div>
    );
}

export default EditProfile;
