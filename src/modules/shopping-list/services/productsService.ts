import type { Product } from "../types";

const BASE_URL = "http://localhost:3001";

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(`${BASE_URL}/products`);
  if (!response.ok) throw new Error("Error al obtener los productos");
  return response.json();
}

export async function createProduct(data: Omit<Product, "id">): Promise<Product> {
  const response = await fetch(`${BASE_URL}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Error al crear el producto");
  return response.json();
}

export async function updateProduct(id: number, changes: Partial<Omit<Product, "id">>): Promise<Product> {
  const response = await fetch(`${BASE_URL}/products/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(changes),
  });
  if (!response.ok) throw new Error("Error al actualizar el producto");
  return response.json();
}

export async function deleteProduct(id: number): Promise<void> {
  const response = await fetch(`${BASE_URL}/products/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Error al eliminar el producto");
}
