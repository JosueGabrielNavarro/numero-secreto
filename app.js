let numeroSecreto = Math.floor(Math.random()*10)+1;
let numeroUsuario = 0;
let intentos = 1;
const MAXIMO_INTENTOS = 3;

console.log(numeroSecreto)
while (numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt("Me indicas un numero por favor:");
    
    if (numeroUsuario == numeroSecreto){
        alert(`El numero es ${numeroSecreto}\nEl numero de intentos: ${intentos} ${intentos == 1 ? 'vez': 'veces'}`);
    } else {
        if(numeroUsuario > numeroSecreto){
            alert("El numero es menor");
        } else {
            alert("El numero es mayor");
        }
    }

    intentos++;

    if (intentos > MAXIMO_INTENTOS){
        alert(`Alcanzaste el numero maximo de intentos ${MAXIMO_INTENTOS}`);
        break;

    }
}