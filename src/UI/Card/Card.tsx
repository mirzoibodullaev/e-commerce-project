import "./Card.css";

export interface ProductProps {
    title?: string;
    price?: number;
    thumbnail?: string;
    description?: string;
}

export const Card = ({ title, price, thumbnail }: ProductProps) => {
    return (
        <div className="card">
            <img className="card__img" src={thumbnail} alt={title} />
            <p className="card__title">{title}</p>
            <span className="card__price">${price}</span>
        </div>
    );
};
