
export const FuncionesBasicas = () => {

    const sumar = (a:number, b:number) : number => {
        return a+b;
    }

  return (
    <div>
        <h3>Funciones</h3>
        <span>El resultado de sumar: {sumar(54,78)} </span>
    </div>
  )
}
