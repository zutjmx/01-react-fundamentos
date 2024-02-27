import { faker } from '@faker-js/faker/locale/es_MX';

export const BasicTypes = () => {
    const nombre: string = faker.person.fullName();
    const edad: number = faker.number.int({min: 20, max: 99});
    const estaActivo: boolean = true;

    const generaArreglo = () => {
        const arreglo = [];
        for (let index = 0; index < 20; index++) {
            arreglo.push(faker.person.fullName());
        }
        return arreglo;
    }

    const gblArreglo: string[] = generaArreglo();

  return (
    <div>
        <h3>Tipos Básicos</h3>
        {nombre.toUpperCase()}
        <br />
        {edad}
        <br />
        {estaActivo? 'Activo' : 'Inactivo'}
        <br />
        {gblArreglo.join(', ')}
    </div>
  )
}
