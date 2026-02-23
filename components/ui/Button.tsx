"use client";

import { ButtonProps } from "@/interfaces/button";

export default function Button({
    children,
    variant = "primary",
    ...props
}: ButtonProps) {
    const base = 
        "flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200";

    const variants = {
        primary: "bg-black text-white hover:bg-gray-800",
        secondary: "bg-gray-200 text-black hover:bg-gray-300",
        danger: "bg-red-600 text-white hover:bg-red-700",
    };

    return (
        <button className={`${base} ${variants[variant]}`} {...props}>
            {children}
        </button>
    );
}

