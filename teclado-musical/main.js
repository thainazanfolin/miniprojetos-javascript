function tocaSom(idElementoAudio){

 document.querySelector(idElementoAudio).play();     
 
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let contador = 0 ; contador < listaDeTeclas.length; contador++){ //lenght vai ate o tamanho final 
    
    const tecla = listaDeTeclas[contador];
    const som = listaDeTeclas[contador].classList[1];
    const idAudio = `#som_${som}`; //inserir uma codigo dentro da string

    tecla.onclick = function(){
        tocaSom(idAudio);
    }
    tecla.onkeydown = function(evento){
        if(evento.code === 'Space'|| evento.code === 'Enter'){ 
            tecla.classList.add('ativa');
        }

    }
    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}
