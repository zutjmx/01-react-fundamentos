import axios from "axios";
import { useEffect, useState } from 'react';
import type { ReqRespUserListResponse, Usuario } from "../interfaces";

const cargaUsuarios = async (): Promise<Usuario[]> => {
    try {
        const {data} = await axios.get<ReqRespUserListResponse>('https://reqres.in/api/users');
        return data.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export const PaginaUsuarios = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    useEffect(() => {
        cargaUsuarios().then(setUsuarios);
    },[]);

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
