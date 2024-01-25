import "./Navbar.css";

export const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar__content">
                <li className="navbar__item">Shipping</li>
                <li className="navbar__item">Blog</li>
                <li className="navbar__item">Company</li>
                <li className="navbar__item">My account </li>
            </ul>
        </nav>
    );
};
