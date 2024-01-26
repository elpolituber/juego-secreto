let numeroSecreto=0;
let intentos;
let listaNumerosSorteados=[];
let numerosMaximo=10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML=texto;    
}

function verificarIntento(){
    let numeroUsuario=parseInt(document.getElementById('valorUsuario').value);
    if(numeroSecreto === numeroUsuario){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos===1) ? 'vez':'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //El usuario no asierta
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p',"El número secreto es menor");    
        } else {
            asignarTextoElemento('p',"El número secreto es mayor");
        }
        intentos++;
        limpiarCaja();
    }
    
    return;
}

function limpiarCaja(){
    let valorCaja=document.querySelector('#valorUsuario');
    valorCaja.value='';
}
function generarNumeroSecreto() {
    let numeroGenerado= Math.floor(Math.random()*numerosMaximo)+1;
    //Si ya sorteamos  todos los numeros
    if(listaNumerosSorteados.length==numerosMaximo){
        asignarTextoElemento('p','Ya se sortearon los número de intentos posibles')
    }else{
        //si el numero generado esta incluido en la lista 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function condicionesIniciales(){
    asignarTextoElemento('h1',"Juego del número secreto");
    asignarTextoElemento('p',`Indica un número del 1 al ${numerosMaximo}`);
    numeroSecreto=generarNumeroSecreto();
    intentos=1;
}
function reiniciarJuego() {
    //Limpiar la caja de taxto
    limpiarCaja();
    //Indicar mesaje de intervalo de numeros
    //Generar el numero aleatorio
    //Inicializar numero de intentos
    condicionesIniciales();
    //Desabiliatr el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled',true);   
}

condicionesIniciales();