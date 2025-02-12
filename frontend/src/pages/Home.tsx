import { useNavigate } from "react-router-dom";
import "../styles/home.css";

function Home() {
    const navigate = useNavigate();

    const handleLogout = () => {
        const confirmLogout = window.confirm("Are you sure you want to logout?");
        if (confirmLogout) {
            localStorage.removeItem("ACCESS_TOKEN");
            localStorage.removeItem("REFRESH_TOKEN");
            navigate("/login");
        }
    };

    return (
        <div className="home-container">
            <aside className="sidebar">
                <div className="profile-section">                    
                    <h2>Admin123</h2>
                    <p>ADMIN</p>
                </div>
                <nav className="menu">
                    <button className="menu-item">Dashboard</button>
                    <button className="menu-item">View Deliveries</button>
                    <button className="menu-item">Manage Payroll</button>
                    <button className="menu-item" onClick={() => navigate("/edit-profile")}>Edit Profile</button>
                    <button className="menu-item">Settings</button>                    
                    <button className="menu-item logout" onClick={handleLogout}>Logout</button>
                </nav>
            </aside>
            <main className="dashboard">
                <section className="trips">
                    <h2>Trips In Transit</h2>
                    <div className="trip-item">Employee #1 - Ongoing</div>
                    <div className="trip-item">Employee #2 - Ongoing</div>
                    <div className="trip-item">Employee #3 - Ongoing</div>
                </section>
                <section className="employee-status">
                    <h2>Employee Status</h2>
                    <div className="status-card">Employee #1 - Salary: ₱____ - Status: Paid</div>
                    <div className="status-card">Employee #2 - Salary: ₱____ - Status: Paid</div>
                    <div className="status-card">Employee #3 - Salary: ₱____ - Status: Pending</div>
                </section>
                <section className="payroll-summary">
                    <h2>Payroll Summary</h2>
                    <p>Monthly Payroll: ₱ ______</p>
                    <p>Completed Payrolls: __ Completed</p>
                    <button className="generate-report">Generate Report</button>
                </section>
                <section className="employee-list">
                    <h2>Employee List</h2>
                    <ul>
                        <li>Employee #1 - Active</li>
                        <li>Employee #2 - Active</li>
                        <li>Employee #3 - Inactive</li>
                        <li>Employee #4 - Inactive</li>
                    </ul>
                </section>
            </main>
        </div>
    );
}

export default Home;
