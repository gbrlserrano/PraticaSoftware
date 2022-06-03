document.querySelector( 'button').addEventListener( 'click', handleClick, false );

function handleClick() {

var valor1 = parseInt (document.querySelector('[data-js="valor1"]').value);

var valor2 = parseInt(document.querySelector('[data-js="valor2"]').value);

var soma = valor1 + valor2

parseInt(document.querySelector( '[data-js="result"]' ).innerHTML = sum(soma));
    
}

function sum(soma) {
    
    if (soma > 10) {
        document.getElementById("resultado").innerHTML = 
        "Resultado:<p>" + soma + " é maior que 10";
    }else if (soma < 10) {
        document.getElementById("resultado").innerHTML = 
        "Resultado:<p>" + soma + " é menor que 10";
    } else {
        document.getElementById("resultado").innerHTML = 
        "Resultado:<p>" + soma + " é menor que 10";
    }

}