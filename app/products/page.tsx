"use client";

import { useEffect, useState } from "react";
import { Product } from "../../interfaces/product";
import { getProducts } from "@/services/productService";
import ProductCard from "@/components/ProductCard";
import { categories } from "@/constants/categories";
import SkeletonCard from "@/components/SkeletonCard";

export default function ProductsPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");

    const loadProducts = async () => {
        try {
            setLoading(true);
            const data = await getProducts();
            setProducts(data);
        } catch (error) {
            console.error("Eror cargando productos:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadProducts();
    }, []);

    const filtered = products.filter(p => {
        const matchesCategory = selectedCategory
        ? p.category === selectedCategory
        : true;

        const matchesSearch = p.name
            .toLowerCase()
            .includes(search.toLocaleLowerCase());

        return matchesCategory && matchesSearch;
    });

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">
                Productos ({filtered.length})
            </h1>

            <input 
                type="text"
                placeholder="Buscar producto..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border p-2 rounded w-full mb-4"
            />

            <select
                className="border p-2 rounded mb-6"
                value={selectedCategory}
                onChange={e => setSelectedCategory(e.target.value)}
            >
                <option value="">Todas</option>
                {categories.map(cat => (
                    <option key={cat}>{cat}</option>
                ))}
            </select>

            {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[...Array(6)].map((_, i) => (
                        <SkeletonCard key={i} />
                    ))}
                </div>
            ): filtered.length === 0 ? (
                <p>No hay productos</p>
            ): (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {filtered.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}