import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { MainPage } from "./pages/MainPage/MainPage";
import { Cart } from "./pages/Cart/Cart";
import { Product } from "./components/Product/Product";
import "./App.css";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="products/:id" element={<Product />} />
                <Route path="/" element={<MainPage />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </>
    );
}

export default App;
