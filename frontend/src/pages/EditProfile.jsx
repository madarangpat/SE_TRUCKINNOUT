import { useNavigate } from "react-router-dom";
import "../styles/editProfile.css";


function EditProfile() {
    const navigate = useNavigate();

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
                    <input type="text" defaultValue="John" />
                    
                    <label>Last Name</label>
                    <input type="text" defaultValue="Doe" />
                    
                    <label>Username</label>
                    <input type="text" defaultValue="1076" />
                    
                    <label>Password</label>
                    <input type="password" defaultValue="*****" />
                    
                    <label>Contact Number</label>
                    <input type="text" defaultValue="09xxxxxxxx" />
                    
                    <label>Role</label>
                    <input type="text" defaultValue="ADMIN" disabled />
                    
                    <button type="submit" className="save-button">Save Changes</button>
                </form>
            </main>
        </div>
    );
}

export default EditProfile;
