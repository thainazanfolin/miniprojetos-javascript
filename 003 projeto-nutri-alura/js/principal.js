//mudando H1
var titulo = document.querySelector(".titulo");
titulo.textContent = "Positive - Clínica de Saúde | Fichas Nutricionais";

//calculando IMC
var paciente = document.querySelector("#primeiro-paciente"); //selecionando local que vai pegar (classe acrescentada no html)
var tdpeso = document.querySelector(".info-peso"); //pegando apenas a classe info-peso dentro do primeiro paciente e colocando em tdpeso
var peso = tdpeso.textContent; //pegando apenas o conteudo dentro da classe info-peso, que está na variavel tdpeso
var tdaltura = document.querySelector(".info-altura");
var altura = tdaltura.textContent;
var tdImc = paciente.querySelector(".info-imc"); //colocando o calculo na tabela

var pesoValido = true;
var alturaValida= true; 

    if(peso<=0 || peso>=250){
        pesoValido = false;
        tdImc.textContent = "Peso inválido"
    }
    
    if (altura<=0 || altura>=3.0){
        alturaValida=false;
        tdImc.textContent = "Altura inválida"
    }
   
    if (pesoValido==true && alturaValida==true){
        var imc = peso/(altura*altura); //calculo do imc
        tdImc.textContent = imc;
    }
  

console.log(peso); //mostrando apenas o textContent no console
console.log(altura);
console.log("IMC:" + imc); //+ para concatenar a string com o resultado do calculo