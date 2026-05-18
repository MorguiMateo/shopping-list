import { useProducts } from "../hooks/useProducts";
import ProductItem from "./ProductItem";
import ProductForm from "./ProductForm";
import useAuthStore from "../../auth/store/authStore";

function ShoppingListPage() {
  const { data: products, isLoading, isError } = useProducts();
  const logout = useAuthStore((state) => state.logout);

  const pending = products?.filter((p) => !p.done) ?? [];
  const bought = products?.filter((p) => p.done) ?? [];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f3f4f6" }}>
      <header style={{
        backgroundColor: "white",
        borderBottom: "1px solid #e5e7eb",
        padding: "16px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <h1 style={{ fontSize: "20px", fontWeight: "700", color: "#111827" }}>
          Lista de compras
        </h1>
        <button onClick={logout} style={{ fontSize: "14px", color: "#9ca3af" }}>
          Cerrar sesión
        </button>
      </header>

      <main style={{
        maxWidth: "680px",
        margin: "0 auto",
        padding: "32px 24px",
        display: "flex",
        flexDirection: "column",
        gap: "32px",
      }}>
        <div style={{
          backgroundColor: "white",
          border: "1px solid #e5e7eb",
          borderRadius: "8px",
          padding: "20px",
        }}>
          <p style={{ fontSize: "13px", fontWeight: "600", color: "#6b7280", marginBottom: "12px" }}>
            Agregar producto
          </p>
          <ProductForm />
        </div>

        {isLoading && <p style={{ color: "#9ca3af", fontSize: "14px" }}>Cargando...</p>}
        {isError && <p style={{ color: "#ef4444", fontSize: "14px" }}>Error al cargar los productos.</p>}

        {products && (
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <section>
              <p style={{
                fontSize: "12px", fontWeight: "600", color: "#6b7280",
                textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "10px"
              }}>
                Pendientes ({pending.length})
              </p>
              {pending.length === 0
                ? <p style={{ color: "#9ca3af", fontSize: "14px" }}>No hay productos pendientes.</p>
                : <ul style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {pending.map((product) => <ProductItem key={product.id} product={product} />)}
                  </ul>
              }
            </section>

            <section>
              <p style={{
                fontSize: "12px", fontWeight: "600", color: "#6b7280",
                textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "10px"
              }}>
                Comprados ({bought.length})
              </p>
              {bought.length === 0
                ? <p style={{ color: "#9ca3af", fontSize: "14px" }}>No hay productos comprados.</p>
                : <ul style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {bought.map((product) => <ProductItem key={product.id} product={product} />)}
                  </ul>
              }
            </section>
          </div>
        )}
      </main>
    </div>
  );
}

export default ShoppingListPage;
