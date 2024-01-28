import { useEffect } from "react";
import { Card } from "../../UI/Card/Card";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
    selectIsLoading,
    selectProducts,
} from "../../redux/slices/productSlice";
import { getProductsData } from "../../services/getProductsData";
import { Skeleton } from "../../UI/Skeleton/Skeleton";
import { titleFilter } from "../../redux/slices/filterSlice";
import { Link } from "react-router-dom";
import "./ProductList.css";

export const ProductList = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector(selectProducts);
    const title = useAppSelector(titleFilter);
    const isLoading = useAppSelector(selectIsLoading);

    useEffect(() => {
        dispatch(getProductsData());
    }, [dispatch]);

    const filteredProducts = products.filter((product) => {
        return product.title.toLowerCase().includes(title.toLowerCase());
    });

    if (isLoading) {
        return (
            <section>
                <div className="productList">
                    {filteredProducts.map((product) => (
                        <Skeleton
                            key={product.id}
                            width={200}
                            height={310}
                            border="6px"
                        />
                    ))}
                </div>
            </section>
        );
    }

    return (
        <section>
            <div className="productList">
                {filteredProducts.map((product) => (
                    <Link key={product.id} to={`/products/${product.id}`}>
                        <Card {...product} />
                    </Link>
                ))}
            </div>
        </section>
    );
};
