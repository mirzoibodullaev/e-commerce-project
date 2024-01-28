import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Button } from "../../UI/Button/Button";
import { Input } from "../../UI/Input/Input";
import { Navbar } from "../Navbar/Navbar";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setTitleFilter, titleFilter } from "../../redux/slices/filterSlice";
import { ChangeEvent } from "react";
import "./Header.css";

export const Header = () => {
    const title = useAppSelector(titleFilter);
    const dispatch = useAppDispatch();

    const handleTitleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setTitleFilter(e.target.value));
    };

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
                        onChange={handleTitleFilterChange}
                        value={title}
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
