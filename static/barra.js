/*fução para mover a barra lateral*/

let botao = document.querySelector("#hamburger");
let lateral = document.querySelector("aside");
let progresso = document.querySelector('#progresso');

botao.onclick = function(){
    lateral.classList.toggle("mostrando");
    for(item of lateral.children){
        if(item.id !== "hamburger"){
            item.classList.toggle("invisivel");
        }
    }
    for(item of botao.children){
        item.classList.toggle("mostrando");
    }
}
