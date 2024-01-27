import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import {
    selectCategories,
    selectCategoryIsLoading,
} from "../../redux/slices/categoriesSlice";
import {
    getCategoriesData,
    getProductByCategory,
} from "../../services/getCategories";
import "./Sidebar.css";
import { Skeleton } from "../../UI/Skeleton/Skeleton";

export const Sidebar = () => {
    const dispatch = useAppDispatch();
    const categories = useAppSelector(selectCategories);
    const isLoading = useAppSelector(selectCategoryIsLoading);

    useEffect(() => {
        dispatch(getCategoriesData());
    }, [dispatch]);

    const handleCategoryClick = (category: []) => {
        dispatch(getProductByCategory(category));
    };

    if (isLoading) {
        return (
            <aside>
                <div style={{ height: "716px" }} className="categories">
                    <p className="categories__title">ALL CATEGORIES</p>
                    {categories.slice(0, 13).map((_, index) => (
                        <Skeleton
                            key={index}
                            width={230}
                            height={25}
                            margin="25px 0"
                            border="6px"
                            boxShadow="none"
                        />
                    ))}
                </div>
            </aside>
        );
    }

    return (
        <aside>
            <div className="categories">
                <p className="categories__title">ALL CATEGORIES</p>
                {categories.slice(0, 13).map((category, index) => (
                    <ul key={index}>
                        <li
                            onClick={() => handleCategoryClick(category)}
                            className="categories__item"
                        >
                            {category}
                        </li>
                    </ul>
                ))}
            </div>
        </aside>
    );
};
