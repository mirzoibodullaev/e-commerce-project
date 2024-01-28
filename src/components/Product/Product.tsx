import { Card, ProductProps } from "../../UI/Card/Card";

export const Product = (props: ProductProps) => {
    return (
        <div className="container">
            <Card {...props} />
        </div>
    );
};
