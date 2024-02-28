import { useState } from "react"

export const Contador = () => {
    
    const [contar, setContar] = useState<number>(10);

    const incrementar = (valor: number) => {
        setContar(contar + valor);
    }


    return (
        <div>
            <h3>Contador: <small>{contar}</small></h3>
            <div>
                <button onClick={() => incrementar(+1)}>+1</button>
                &nbsp;
                <button onClick={() => incrementar(-1)}>-1</button>
            </div>
        </div>
    )
}
