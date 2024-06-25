console.log("Hola, un saludo!")

// Arrays a tener en cuenta 

let pronoun = ["El", "Nuestro", "Tu", "Mi"];
let adj = ["Alto", "Bajo", "Gordo", "Flaco"];
let noun = ["Loro", "Gato", "Leon", "Perro"];
let domain = [".com", ".net", ".us", ".io"];

// Creamos una función para generar las combinaciones
 function generarCombinaciones(){
    let result = '';

    for (let elem1 of pronoun)
    {
        for (let elem2 of adj)
        {
            for (let elem3 of noun)
            {
                for (let elem4 of domain)
                {
                    let combination = `${elem1}${elem2}${elem3}${elem4} `;
                    result += `<div>${combination}</div> `;
                    
                    // Imprimir en la consola
                    console.log(combination);
                }
            }
        }
    }

// Mostrar el resultado en el collapse
  document.getElementById('resultado').innerHTML = result;

 }

// Asociamos la funcion al boton de Start

 document.getElementById('startBtn').addEventListener('click', function(){generarCombinaciones();});
    


 