import axios from "axios";
import { useEffect } from "react"
import { ReqRespUserListResponse } from "../interfaces";

const cargaUsuarios = async () => {
    try {
        const {data} = await axios.get<ReqRespUserListResponse>('https://reqres.in/api/users');
        return data.data;
    } catch (error) {
        console.log(error);
        return [];
    }
}

export const PaginaUsuarios = () => {

    useEffect(() => {
        cargaUsuarios().then(usuarios => console.log(usuarios));
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
                    <tr>
                        <td>avatar</td>
                        <td>nombre</td>
                        <td>email</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}
