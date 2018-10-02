/*fução para mover a barra lateral*/

let botao = document.querySelector("#hamburger");
let lateral = document.querySelector("aside");

botao.onclick = function(){

    lateral.classList.toggle("mostrando");

    for(item of lateral.children){
        if(item.id !== "hamburger"){
            item.classList.toggle("invisivel");
        }
    }
    lateral.classList.toggle("mostrandoB");

    for(item of lateral.children){
        if(item.id !== "hamburger"){
            
            item.classList.toggle("invisivelB");
        }
    }
}

let link2 = document.querySelector("#BotaoDois");
let primeiraAba = document.getElementsByClassName(".grade2");

function Grade1() {
    var x = document.getElementById("master");
    x.getElementsByClassName("grade")[0].style.visibility = "visible";
    x.getElementsByClassName("grade")[1].style.visibility = "hidden";
    x.getElementsByClassName("grade")[2].style.visibility = "hidden";
   
}
function Grade2() {
    var x = document.getElementById("master");
    x.getElementsByClassName("grade")[0].style.visibility = "hidden";
    x.getElementsByClassName("grade")[1].style.visibility = "visible";

    x.getElementsByClassName("grade")[1].style.marginTop = "-89vh";
}

function openNav() {
		document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}