import  useAuthStore  from "../store/authStore";
import { Navigate, Outlet } from "react-router-dom";

//outlet se encarga de renderizar el componente hijo

//Si el usuario está autenticado, renderiza el componente hijo, si no, redirige a la página de login
const PrivateRoute = () => {
    const  isAuthenticated  = useAuthStore(state => state.isAuthenticated);
    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace/>;
};

export default PrivateRoute;