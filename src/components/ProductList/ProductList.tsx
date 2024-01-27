import { useEffect } from "react";
import { Card } from "../../UI/Card/Card";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
    selectIsLoading,
    selectProducts,
} from "../../redux/slices/productSlice";
import { getProductsData } from "../../services/getProductsData";
import "./ProductList.css";
import { Skeleton } from "../../UI/Skeleton/Skeleton";

export const ProductList = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector(selectProducts);
    const isLoading = useAppSelector(selectIsLoading);

    useEffect(() => {
        dispatch(getProductsData());
    }, [dispatch]);

    if (isLoading) {
        return (
            <section>
                <div className="productList">
                    {products.map((product) => (
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
                {products.map((product) => (
                    <Card key={product.id} {...product} />
                ))}
            </div>
        </section>
    );
};
