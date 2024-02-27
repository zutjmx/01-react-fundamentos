import { faker } from '@faker-js/faker';

import { BasicTypes } from "./typescript"

const tituloFaker = faker.finance.accountName();

function App() {

  return (
    <main>
      
      <h1>Introducción a TS - React</h1>
      <h2>Título faker: {tituloFaker}</h2>

      {/* Componentes */}
      <BasicTypes/>

    </main>
  )
}

export default App
