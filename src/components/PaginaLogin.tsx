import { useEffect } from "react";
import { useAuthStore } from "../store/auth.store"

export const PaginaLogin = () => {
    const authStatus = useAuthStore(state => state.status);
    const usuario = useAuthStore(state => state.usuario);
    const login = useAuthStore(state => state.login);
    const logout = useAuthStore(state => state.logout);

    useEffect(() => {
        setTimeout(() => {
            logout();
        }, 1500);
    },[]);
    
    if (authStatus === 'checando') {
        return <h3>Cargando...</h3>
    }

    return (
        <>
            <h3>Página de Login</h3>
            {
                (authStatus === 'autenticado'
                ? <div>Autenficado como: {JSON.stringify(usuario,null,2)}</div>
                : <div>No Autenticado</div>)
            }

            {
                (authStatus === 'autenticado'
                ? (
                    <button onClick={logout}>Salir</button>
                )
                : (
                    <button onClick={()=>login('zutjmx@gmail.com','sistemas')}>
                        Entrar
                    </button>
                ))
            }
        </>
    )
}
