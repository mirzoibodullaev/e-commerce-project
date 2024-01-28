import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    className?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
    placeholder,
    className,
    value,
    onChange,
}: InputProps) => {
    return (
        <input
            onChange={onChange}
            value={value}
            className={className}
            placeholder={placeholder}
            type="text"
        />
    );
};
