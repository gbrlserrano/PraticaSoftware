document.querySelector( 'button').addEventListener( 'click', handleClick, false );

function handleClick() {

var nome = document.querySelector('[data-js="nome"]').value;

var sobrenome = document.querySelector('[data-js="sobrenome"]').value;

var email= document.querySelector('[data-js="email"]').value;

document.querySelector( '[data-js="result"]' ).innerHTML = sum( nome, sobrenome, email);

}

function sum( nome, sobrenome, email ) {

document.getElementById("resultado").innerHTML = 
"Dados Cadastrados:<p>" + "<p>Nome: " + nome + "<p>Sobrenome: " + sobrenome + "<p>Email: " + email;


}