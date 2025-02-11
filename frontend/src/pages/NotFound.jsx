import { useNavigate } from "react-router-dom";
import "../styles/notfound.css";

function NotFound() {
    const navigate = useNavigate();

    return (
        <div className="notfound-container">
            <h1 className="error-code">404</h1>
            <p className="error-message">Oops! The page you are looking for does not exist.</p>
            <button className="home-button" onClick={() => navigate("/")}>Go to Home</button>
        </div>
    );
}

export default NotFound;
