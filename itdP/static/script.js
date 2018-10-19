let info = document.querySelector('#panel');
let devs = document.querySelector('.devs');

function myFunction() {
    if (info.style.display === "none" || info.style.display === ""){
        info.style.display = "flex";
    } else {
        info.style.display = "none";    }
    }
    
    let usuario = document.querySelector('#usuario');
    let empresa = document.querySelector('#enterprise');

    usuario.addEventListener('click', ()=>{
        window.location.href='login';
        
    }
)

empresa.addEventListener('click', ()=>{
    window.location.href='login';
}
)

let logemp = document.querySelector('#logemp');
let logusu = document.querySelector('#logusu'); 

function emp(){
    window.location.href='enterprise';
    
}
function usu(){
    window.location.href='user';
}

jQuery(document).ready(function($) { 
    $(".scroll").click(function(event){        
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
   });
  });