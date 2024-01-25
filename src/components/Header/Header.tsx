import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Navbar } from "components/Navbar/Navbar";
import { Button } from "UI/Button/Button";
import { Input } from "UI/Input/Input";
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
                <div className="header__under">
                    <Input
                        className="header__search"
                        placeholder="Search products by SKU or name"
                    />
                    <Link to="/cart">
                        <Button className="header__cart">
                            <FiShoppingCart style={{ marginRight: "15px" }} />
                            MY CART
                        </Button>
                    </Link>
                </div>
            </div>
        </header>
    );
};
