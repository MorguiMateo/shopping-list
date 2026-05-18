import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { User } from '../types';

interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;
  error: string | null;
  login: (credentials: User) => boolean
  logout: () => void;
}

const MAIL = "pepe@gmail.com";
const PASSWORD = "pepePassword23";

const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      error: null,

      login: (credentials) => {
        if (credentials.email === MAIL && credentials.password === PASSWORD) {
          set({ user: credentials, isAuthenticated: true, error: null });
          return true;
        }
        set({ error: "Credenciales incorrectas" });
        return false;
      },
      logout: () => {
        set({ user: null, isAuthenticated: false, error: null });
      },
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);

export default useAuthStore;