import axios from "axios";
import { useEffect } from "react"

export const PaginaUsuarios = () => {

    useEffect(() => {
        //Con axios

        axios.get('https://reqres.in/api/users?page=1')
            .then(respuesta => console.log(respuesta.data.total));
        
        //Con fetch
        /* fetch('https://reqres.in/api/users?page=1')
        .then(respuesta => respuesta.json())
        .then(data => console.log(data)); */

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
