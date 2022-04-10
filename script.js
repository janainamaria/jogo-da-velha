var jogador, vencedor = null;
var jogadorselecionado = document.getElementById('jogadorselecionado')
var vencedorselecionado = document.getElementById('vencedorselecionado')

var quadrado1 = document.getElementById(1)
var quadrado2 = document.getElementById(2)
var quadrado3 = document.getElementById(3)
var quadrado4 = document.getElementById(4)
var quadrado5 = document.getElementById(5)
var quadrado6 = document.getElementById(6)
var quadrado7 = document.getElementById(7)
var quadrado8 = document.getElementById(8)
var quadrado9 = document.getElementById(9)

mudarjogador('x');

function escolherquadrado(id){
    if (vencedor !== null) {
        return;
    }
 var quadrado = document.getElementById(id)
 if (quadrado.innerHTML !== '-'){
     return;
 }
 
 quadrado.innerHTML = jogador;
 quadrado.style.color = '#000';

 if(jogador === 'x'){
jogador = 'o'
 }else{
    jogador = 'x'
}
mudarjogador(jogador)
checavencedor();
}


function mudarjogador(valor){
    jogador = valor;
    jogadorselecionado.innerHTML = jogador;
}
function checavencedor(){
    if(checaSequencia(quadrado1, quadrado2 , quadrado3)){
        mudacorquadrado(quadrado1, quadrado2 , quadrado3)
        mudarvencedor(quadrado1);
        return;
    }
    if(checaSequencia(quadrado4, quadrado5 , quadrado6)){
        mudacorquadrado(quadrado4, quadrado5 , quadrado6)
        mudarvencedor(quadrado4);
        return;
    }
    if(checaSequencia(quadrado7, quadrado8 , quadrado9)){
        mudacorquadrado(quadrado7, quadrado8 , quadrado9)
        mudarvencedor(quadrado7);
        return;
    }
    if(checaSequencia(quadrado1, quadrado4 , quadrado7)){
        mudacorquadrado(quadrado1, quadrado4 , quadrado7)
        mudarvencedor(quadrado1);
        return;
    }
    if (checaSequencia(quadrado2, quadrado5, quadrado8)) {
        mudacorquadrado(quadrado2, quadrado5, quadrado8);
        mudarvencedor(quadrado2);
        return;
    }

    if (checaSequencia(quadrado3, quadrado6, quadrado9)) {
        mudacorquadrado(quadrado3, quadrado6, quadrado9);
        mudarvencedor(quadrado3);
        return;
    }

    if (checaSequencia(quadrado1, quadrado5, quadrado9)) {
        mudacorquadrado(quadrado1, quadrado5, quadrado9);
        mudarvencedor(quadrado1);
        return;
    }

    if (checaSequencia(quadrado3, quadrado5, quadrado7)) {
        mudacorquadrado(quadrado3, quadrado5, quadrado7);
        mudarvencedor(quadrado3);
        return;
    }
    verificaEmpate(quadrado1,quadrado2,quadrado3,quadrado4,quadrado5,quadrado6,quadrado7,quadrado8,quadrado9)

}
function mudarvencedor(quadrado){
  vencedor = quadrado.innerHTML;
  vencedorselecionado.innerHTML = vencedor;
}
function mudacorquadrado(quadrado1, quadrado2 , quadrado3) {
    quadrado1.style.background = '#29AD00';
    quadrado2.style.background = '#29AD00';
    quadrado3.style.background = '#29AD00';
}
function checaSequencia(quadrado1, quadrado2, quadrado3){
   let eigual = false;
   if (quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML) {
       eigual = true;
   }
   return eigual;
}

function reiniciar()
{
    vencedor = null;
    vencedorselecionado.innerHTML = '';

    for (var i = 1; i <= 9; i++) {
        var quadrado = document.getElementById(i);
        quadrado.style.background = '#eee';
        quadrado.style.color = '#eee';
        quadrado.innerHTML = '-';
    }

    mudarjogador('x');
}

function verificaEmpate(quadrado1,quadrado2,quadrado3,quadrado4,quadrado5,quadrado6,quadrado7,quadrado8,quadrado9){
    if(quadrado1.style.background !== "#29AD00" && quadrado2.style.background !== "#29AD00" && quadrado3.style.background !== "#29AD00" && quadrado4.style.background !== "#29AD00" && quadrado5.style.background !== "#29AyD00" && quadrado6.style.background !== "#29AD00" && quadrado7.style.background !== "#29AD00" && quadrado8.style.background !== "#29AD00" && quadrado9.style.background !== "#29AD00" ){
        if(quadrado1.innerHTML !== "-" && quadrado2.innerHTML !== "-" && quadrado3.innerHTML !== "-" && quadrado4.innerHTML !== "-" && quadrado5.innerHTML !== "-" && quadrado6.innerHTML !== "-" && quadrado7.innerHTML !== "-" && quadrado8.innerHTML !== "-" && quadrado9.innerHTML !== "-" ){
            alert("Ninguem ganhou pau no cu dos dois!!")
            reiniciar()
        }
    }
    
}