import { Sidebar } from "components/Sidebar/Sidebar";
import { ProductList } from "components/ProductList/ProductList";
import "./MainPage.css";

export const MainPage = () => {
    return (
        <main className="container">
            <div className="main__wrapper">
                <Sidebar />
                <ProductList />
            </div>
        </main>
    );
};
