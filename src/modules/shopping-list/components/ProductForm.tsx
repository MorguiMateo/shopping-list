import { useState } from "react";
import { useCreateProduct } from "../hooks/useProducts";

function ProductForm() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [unit, setUnit] = useState("");

  const createProduct = useCreateProduct();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !unit.trim()) return;
    createProduct.mutate(
      { name, quantity, unit, done: false },
      {
        onSuccess: () => {
          setName("");
          setQuantity(1);
          setUnit("");
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap gap-3 items-center">
      <input
        type="text"
        placeholder="Producto"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 text-sm flex-1 min-w-36 focus:outline-none"
      />
      <input
        type="number"
        placeholder="Cantidad"
        value={quantity}
        min={1}
        onChange={(e) => setQuantity(Number(e.target.value))}
        className="border border-gray-300 rounded-md px-3 py-2 text-sm w-24 focus:outline-none"
      />
      <input
        type="text"
        placeholder="Unidad (kg, L...)"
        value={unit}
        onChange={(e) => setUnit(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 text-sm w-32 focus:outline-none"
      />
      <button
        type="submit"
        disabled={createProduct.isPending}
        className="bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-medium disabled:opacity-50"
      >
        {createProduct.isPending ? "Agregando..." : "Agregar"}
      </button>
    </form>
  );
}

export default ProductForm;
