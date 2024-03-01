/* import { 
  FuncionesBasicas,
   BasicTypes,  
  ObjetosLiterales } from "./typescript" */

import { /* Contador, */ BotonReusable, ContadorWithHook } from "./components"

function App() {

  return (
    <main>
      
      <h1>Introducción a TS - React</h1>

      {/* Componentes */}
      {/* <BasicTypes/> */}
      {/* <ObjetosLiterales/> */}
      {/* <FuncionesBasicas/> */}
      {/* <Contador/> */}
      <ContadorWithHook/>
      <BotonReusable color="red"/>

    </main>
  )
}

export default App
