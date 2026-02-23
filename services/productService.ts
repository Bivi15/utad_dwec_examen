import { Product } from "@/interfaces/product";

const API_URL = "http://localhost:3001/products";

export const getProducts = async (): Promise<Product[]> => {
    const res = await fetch(API_URL);
    return res.json();
};

export const getProductById = async (id: string): Promise<Product> => {
    const res = await fetch(`${API_URL}/${id}`);

    if (!res.ok) {
        throw new Error(`Producto ${id} no encontrado`);
    }

    return res.json();
};

// Solo lectura: no hay creación, edición ni borrado de productos