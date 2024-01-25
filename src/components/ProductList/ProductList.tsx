import { useEffect } from "react";
import { selectCategoryItem } from "redux/slices/categoriesSlice";
import { Card } from "UI/Card/Card";
import { selectProducts } from "redux/slices/productSlice";
import { getProductsData } from "services/getProductsData";
import { useAppDispatch, useAppSelector } from "hooks/hooks";

import "./ProductList.css";

export const ProductList = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector(selectProducts);
    const categoryItem = useAppSelector(selectCategoryItem);

    useEffect(() => {
        dispatch(getProductsData());
    }, [dispatch]);


    return (
        <section>
            <div className="productList">
                {categoryItem.map((product) => (
                    <Card key={product.id} {...product} />
                ))}
            </div>
        </section>
    );
};
