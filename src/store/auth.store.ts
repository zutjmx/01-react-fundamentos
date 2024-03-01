import { create } from "zustand";

interface Authstate {
    status: 'autenticado' | 'noautenticado' | 'checando';
    token?: string;
    usuario?: {
        nombre: string;
        email: string;
    };
    login: (email: string, password: string) => void;
    logout: () => void;
}

export const useAuthStore = create<Authstate>()((set) => ({
    status: 'checando',
    token: undefined,
    usuario: undefined,

    login: (email: string, password: string) => {
        set({
            status: 'autenticado',
            token: 'cch-86256108',
            usuario: {
                nombre: 'Jesús Zúñiga Trejo',
                email: email,
            }
        });
    },

    logout: () => {
        set({
            status: 'noautenticado',
            token: undefined,
            usuario: undefined
        });
    },
}));
