import { create } from 'zustand';
import { User } from '../types';

interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;
  error: string | null;
  login: (credentials: User) => boolean
  logout: () => void;
}

const MAIL = "pepe@gmail.com";
const PASSWORD = "pepePassword23";

const useAuthStore = create<AuthStore>()((set) => ({

    user: null,
    isAuthenticated: false,
    error: null,

    login: (credentials) => {
        if (credentials.email === MAIL && credentials.password === PASSWORD) {
            // Limpia cualquier error previo de intentos fallidos
            set({ user: credentials, isAuthenticated: true, error: null });
            return true;
        }
        // Permite que el componente muestre el mensaje de error
        set({ error: "Credenciales incorrectas" });
        return false;
    },
    logout: () => {
        // Logout es local, no puede fallar; solo resetea el estado
        set({ user: null, isAuthenticated: false, error: null });
    },
  }))

export default useAuthStore;