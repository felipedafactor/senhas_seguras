const caracteres =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*?";

function gerarSenha(){

let tamanho = 16;

let senha = "";

for(let i=0;i<tamanho;i++){

senha += caracteres.charAt(
Math.floor(Math.random()*caracteres.length)
);

}

document.getElementById("senha").value = senha;

verificarForca(senha);

}

function verificarForca(senha){

let nivel = 0;

if(senha.length>=8) nivel++;
if(/[A-Z]/.test(senha)) nivel++;
if(/[0-9]/.test(senha)) nivel++;
if(/[!@#$%&*?]/.test(senha)) nivel++;

const barra = document.getElementById("nivel");
const texto = document.getElementById("textoForca");

if(nivel==1){

barra.style.width="25%";
barra.style.background="red";
texto.innerHTML="Fraca";

}

else if(nivel==2){

barra.style.width="50%";
barra.style.background="orange";
texto.innerHTML="Média";

}

else if(nivel==3){

barra.style.width="75%";
barra.style.background="gold";
texto.innerHTML="Boa";

}

else{

barra.style.width="100%";
barra.style.background="limegreen";
texto.innerHTML="Muito Forte";

}

}

function copiarSenha(){

const senha = document.getElementById("senha");

navigator.clipboard.writeText(senha.value);

alert("Senha copiada!");

}

gerarSenha();