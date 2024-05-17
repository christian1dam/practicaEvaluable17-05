
document.getElementById("button").addEventListener("click", (e) => {
    e.preventDefault();
    var primerNumero = document.getElementById("getPrimerNumero").value;
    var segundoNumero = document.getElementById("getSegundoNumero").value;
    var tercerNumero = document.getElementById("getTercerNumero").value;
    var array = generarArray(primerNumero);
    var segundo = segundoNumeroPorCadaElementoArray(array, segundoNumero);
    tercera(segundo, tercerNumero);
});

function generarArray(length){
    var array = new Array();
    for(let i = 0; i < length; i++){
        array.push(Math.floor(Math.random(1 - length) * length));
    }
    //LA FUNCION ES CORRECTA, PERO PARA PODER VERLO TIENES QUE VERLO DESDE LA CONSOLA
    console.log(array);
    return array;
}

function segundoNumeroPorCadaElementoArray(array, segundoNumero){  
    var array = new Array;
    if(array instanceof Array){
        array.forEach((e) => array.push(e * segundoNumero));
    }
    return array;
}   


function tercera(array, segundoNumero){  
    var array = new Array;
    if(array instanceof Array){
        array.forEach((e) => array.push(e * segundoNumero));
    }
    var div = document.createElement('div');
    div.style.display = "block";
    document.getElementById("form").innerHTML = `${array}`;
}   