import axios from "axios";
import { useEffect, useRef, useState } from 'react';
import type { ReqRespUserListResponse, Usuario } from "../interfaces";

const cargaUsuarios = async (page: number = 1): Promise<Usuario[]> => {
    try {
        const {data} = await axios.get<ReqRespUserListResponse>('https://reqres.in/api/users', {
            params: {
                page: page
            }
        });
        return data.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export const PaginaUsuarios = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const paginaActualRef = useRef(1);

    useEffect(() => {
        cargaUsuarios(paginaActualRef.current)
        .then(setUsuarios);
    },[]);

    const paginaSiguiente = async () => {
        paginaActualRef.current++;
        const usuarios = await cargaUsuarios(paginaActualRef.current);
        if (usuarios.length > 0) {
            setUsuarios(usuarios);
        } else {
            paginaActualRef.current--;
        }
    }

    const paginaPrevia = async () => {
        if (paginaActualRef.current < 1) {
            return;
        }
        paginaActualRef.current--;
        const usuarios = await cargaUsuarios(paginaActualRef.current);
        setUsuarios(usuarios);
    }

    return (
        <>
            <h3>Usuarios:</h3>
            <table>
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map(usuario => (
                        <RenglonUsuario key={usuario.id} usuario={usuario}/>
                    ))}
                </tbody>
            </table>
            <div>
                <button onClick={paginaPrevia}>Anterior</button>
                <button onClick={paginaSiguiente}>Siguiente</button>
            </div>            
        </>
    )
}

interface Props {
    usuario: Usuario;
}

export const RenglonUsuario = ({usuario}: Props) => {
    const {avatar,first_name,last_name,email} = usuario;
    return (
        <tr>
            <td><img style={{width: '50px'}} src={avatar} alt="Avatar del usuario" /></td>
            <td>{first_name} {last_name}</td>
            <td>{email}</td>
        </tr>
    )
}
