"use client";

import { Product } from "@/interfaces/product";
import { getProductById } from "@/services/productService";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Button from "@/components/ui/Button"

export default function ProductDetailPage() {
    const { id } = useParams();
    const router = useRouter();
    const [product, setProduct] = useState<Product | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (id) {
            getProductById(String(id))
                .then(setProduct)
                .catch((err) => {
                    console.error(err);
                    setError("Producto no encontrado");
                });
        }
    }, [id]);

    if (error) return <p>{error}</p>;
    if (!product) return <p>Cargando...</p>;

    return (
        <div className="max-w-4xl mx-auto px-4 py-8 space-y-4">
            <Button onClick={() => router.push("/")}>
                Volver a la lista
            </Button>

            <div className="bg-slate-400 text-black rounded-2xl shadow-2xl overflow-hidden grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-full">
                    <Image
                        src={product.img_url}
                        alt={product.name}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="p-6 md:p-8 space-y-3 flex flex-col justify-between">
                    <div className="space-y-3">
                        <h1 className="text-2xl md:text-3xl font-bold">{product.name}</h1>
                        <p className="text-sm text-gray-700">ID: {product.id}</p>
                        <p className="text-gray-800">
                            <span className="font-semibold">Categoría:</span> {product.category}
                        </p>
                        <p className="text-gray-800">
                            <span className="font-semibold">Disponibilidad:</span>{" "}
                            {product.available ? "Disponible" : "No disponible"}
                        </p>
                        <p className="text-gray-900">
                            <span className="font-semibold">Descripción:</span> {product.description}
                        </p>
                        <p className="text-xs text-gray-700 break-all">
                            <span className="font-semibold">URL imagen:</span> {product.img_url}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
