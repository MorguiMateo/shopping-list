import type { Product } from "../types";
import { useToggleDone, useDeleteProduct } from "../hooks/useProducts";

interface Props {
  product: Product;
}

function ProductItem({ product }: Props) {
  const toggleDone = useToggleDone();
  const deleteProduct = useDeleteProduct();

  return (
    <li className="flex items-center justify-between px-4 py-3 bg-white border border-gray-200 rounded-md">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={product.done}
          onChange={() => toggleDone.mutate({ id: product.id, done: !product.done })}
          className="w-4 h-4 cursor-pointer"
        />
        <span className={`text-sm ${product.done ? "line-through text-gray-400" : "text-gray-800"}`}>
          {product.name}
          <span className="ml-2 text-gray-400">{product.quantity} {product.unit}</span>
        </span>
      </div>
      <button
        onClick={() => deleteProduct.mutate(product.id)}
        className="text-red-400 text-sm ml-4"
      >
        Eliminar
      </button>
    </li>
  );
}

export default ProductItem;
