import { useContador } from "../hooks/useContador"

export const ContadorWithHook = () => {
    
    const {contar, incrementar} = useContador({
        valorInicial: 1
    });
    
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
