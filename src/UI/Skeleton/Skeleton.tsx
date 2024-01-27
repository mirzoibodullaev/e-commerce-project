import { CSSProperties } from "react";
import "./Skeleton.css";

interface SkeletonProps {
    height?: string | number;
    width?: string | number;
    border?: string;
    margin?: string;
    boxShadow?: string;
}

export const Skeleton = ({
    height,
    width,
    border,
    margin,
    boxShadow,
}: SkeletonProps) => {
    const styles: CSSProperties = {
        width,
        height,
        borderRadius: border,
        margin,
        boxShadow,
    };

    return <div style={styles} className="Skeleton"></div>;
};
