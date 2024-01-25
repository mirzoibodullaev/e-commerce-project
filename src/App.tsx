import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { MainPage } from "./pages/MainPage/MainPage";
import { Cart } from "./pages/Cart/Cart";
import "./App.css";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </>
    );
}

export default App;
