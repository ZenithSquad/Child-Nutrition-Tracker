import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import '../styles/header.css'
import { Link } from "react-router-dom";

const Header = ({ login, text }) => {

    return (
        <>
            <header className="header">
                <p id="header-title">Micro, Small and Medium Enterprises</p>
                <div className="header-profile">
                    <p><Link to="/">Home</Link></p>
                    <p><Link to="/login">{login ? text : "Login"} </Link></p>
                    <FontAwesomeIcon icon={faCircleUser} style={{ color: "#fff", fontSize: "30px" }} />
                </div>
            </header>
        </>
    );
};

export default Header;
