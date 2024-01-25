import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "hooks/hooks";
import { selectCategories } from "redux/slices/categoriesSlice";
import { getCategoriesData, getCategoryItems } from "services/getCategories";
import "./Sidebar.css";

export const Sidebar = () => {
    const dispatch = useAppDispatch();
    const categories = useAppSelector(selectCategories);

    useEffect(() => {
        dispatch(getCategoriesData());
    }, [dispatch]);

    const handleCategoryClick = (category: []) => {
        dispatch(getCategoryItems(category));
    };

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
