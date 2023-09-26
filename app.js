const audio1 = new Audio('sound/1.mp3')
const audio2 = new Audio('sound/2.mp3')
const audio3 = new Audio('sound/3.mp3')
const audio4 = new Audio('sound/4.mp3')
const audio5 = new Audio('sound/5.mp3')
const audio6 = new Audio('sound/6.mp3')
const audio7 = new Audio('sound/7.mp3')
const audio8 = new Audio('sound/8.mp3')
const audio9 = new Audio('sound/9.mp3')
const audio10 = new Audio('sound/10.mp3')
const audio11 = new Audio('sound/11.mp3')
const audio12 = new Audio('sound/12.mp3')
const btnTecla1 = document.getElementById('tecla1');
const btnTecla1Sos = document.getElementById('tecla1Sos');
const btnTecla2 = document.getElementById('tecla2')
const btnTecla2Sos = document.getElementById('tecla2Sos')
const btnTecla3 = document.getElementById('tecla3')
const btnTecla4 = document.getElementById('tecla4')
const btnTecla4Sos = document.getElementById('tecla4Sos')
const btnTecla5 = document.getElementById('tecla5')
const btnTecla5Sos = document.getElementById('tecla5Sos')
const btnTecla6 = document.getElementById('tecla6')
const btnTecla6Sos = document.getElementById('tecla6Sos')
const btnTecla7 = document.getElementById('tecla7')

btnTecla1.addEventListener('click' , sonar);
function sonar(){
    audio1.play();
}

btnTecla1Sos.addEventListener('click', sonar2); 
function sonar2 (){
    audio2.play();
}

btnTecla2.addEventListener('click', sonar3); 
function sonar3 (){
    audio3.play();
}
btnTecla2Sos.addEventListener('click', sonar4); 
function sonar4 (){
    audio4.play();
}

btnTecla3.addEventListener('click', sonar5); 
function sonar5 (){
    audio5.play();
}

btnTecla4.addEventListener('click', sonar6); 
function sonar6 (){
    audio6.play();
}
btnTecla4Sos.addEventListener('click', sonar7); 
function sonar7 (){
    audio7.play();
}
btnTecla5.addEventListener('click', sonar8); 
function sonar8 (){
    audio8.play();
}
btnTecla5Sos.addEventListener('click', sonar9); 
function sonar9 (){
    audio9.play();
}
btnTecla6.addEventListener('click', sonar10); 
function sonar10 (){
    audio10.play();
}
btnTecla6Sos.addEventListener('click', sonar11); 
function sonar11 (){
    audio11.play();
}
btnTecla7.addEventListener('click', sonar12); 
function sonar12 (){
    audio12.play();
}
