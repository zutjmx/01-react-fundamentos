import { useAuthStore } from "../store/auth.store"

export const PaginaLogin = () => {
    const authStatus = useAuthStore(state => state.status);
    
    return (
        <>
            <h3>Página de Login</h3>
            {authStatus}
        </>
    )
}
