import { faker } from '@faker-js/faker/locale/es_MX';

interface Persona {
    nombre: string;
    paterno: string;
    materno: string;
    edad: number;
    direccion: Direccion;
    esFuncionario?: boolean; //Atributo opcional se marca con '?'
}

interface Direccion {
    calle: string;
    numeroExt: string;
    numeroInt: string;
    colonia: string;
    ciudad: string;
    codigoPostal: string;
    pais: string;
}

export const ObjetosLiterales = () => {
    const persona: Persona = {
        nombre: faker.person.firstName(),
        paterno: faker.person.lastName(),
        materno: faker.person.lastName(),
        edad: faker.number.int({ min: 19, max: 99 }),
        direccion: {
            calle: faker.location.street(),
            numeroExt: faker.location.buildingNumber().trim(),
            numeroInt: faker.location.buildingNumber().trim(),
            colonia: faker.location.county(),
            ciudad: faker.location.city(),
            codigoPostal: faker.location.zipCode(),
            pais: faker.location.country()
        }
    };

    console.log(persona);

  return (
    <div>
        <h3>Objetos Literales</h3>
        <pre>
            {JSON.stringify(persona,null,2)}
        </pre>
    </div>
  )
}
