import { useState } from "react";

interface Opciones {
    valorInicial: number;
}

export const useContador = ({valorInicial = 0} : Opciones) => {
    
    const [contar, setContar] = useState<number>(valorInicial);

    const incrementar = (valor: number) => {
        const nuevoValor = contar + valor;
        if (nuevoValor >= 0) {
            setContar(nuevoValor);
        }
    }

    return {
        //Properties
        contar, 

        //Métodos
        incrementar,
    }
}
