import { Link } from "react-router-dom";

import './NavBar.css';

function NavBar ({data}) {
    return (
        <nav className="navbar">
            <Link to="/" className="nav-link">Home</Link>

            {data.map(dataElement => (
                <Link 
                    key={dataElement.id} 
                    to={`/${dataElement.id}`} 
                    className="nav-link"
                >
                    {dataElement.title}
                </Link>
            ))}
        </nav>
    );
}

export default NavBar;
