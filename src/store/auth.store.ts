import { create } from "zustand";

interface Authstate {
    status: 'autenteticado' | 'noautenticado' | 'checando';
    token?: string;
    usuario?: {
        nombre: string;
        email: string;
    }
}

export const useAuthStore = create<Authstate>()((set) => ({
    status: 'checando',
    token: undefined,
    usuario: undefined,
}));
