"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { ProductCardProps } from "@/interfaces/productCard";
import Button from "./ui/Button"

export default function ProductCard({ product }: ProductCardProps) {

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-slate-400 text-black shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition duration-300"
        >
            {product.img_url ? (
                <Link href={`/products/${product.id}`}>
                    <Image
                        src={product.img_url}
                        alt={product.name}
                        width={400}
                        height={300}
                        className="w-full h-56 object-cover"
                    />
                </Link>
            ) : null}

            <div className="p-4 space-y-2">
                <h2 className="font-bold text-lg">{product.name}</h2>
                <p className="text-gray-600">{product.category}</p>
                <p className="font-semibold">
                    {product.available ? "Disponible" : "No disponible"}
                </p>
            </div>
        </motion.div>
    );
}