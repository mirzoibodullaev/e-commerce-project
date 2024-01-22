import { Navbar } from "../Navbar/Navbar";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import "./Header.css";

export const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <div className="header__content">
                        <div className="header__logo">Amazing Store</div>
                        <div className="header__location">
                            {" "}
                            <FaLocationDot className="icon" />
                            My city: <span>Los Angeles</span>
                        </div>
                        <div className="header__contact">
                            {" "}
                            <FaPhoneAlt className="icon" />8 800 505-04-83
                        </div>
                    </div>
                    <div className="header__navigate">
                        <Navbar />
                    </div>
                </div>
            </div>
        </header>
    );
};
