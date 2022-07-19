const turnOn = document.getElementById ('turnOn');
const turnOff = document.getElementById ('turnOff');
const lampada = document.getElementById ('lamp');

function isLampBroken(){
    return lamp.src.indexOf('quebrada') > - 1
}

function lampOn (){
    if ( !isLampBroken () ){
        lamp.src = "_img/ligada.jpg";
    }
}

function lampOff(){
    if ( !isLampBroken () ){
        lamp.src = "_img/desligada.jpg";
    }
}

function lampBroken(){
    lamp.src = "_img/quebrada.jpg";
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);


