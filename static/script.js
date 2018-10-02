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


logemp.addEventListener('click', ()=>{
    logemp.style.display == "none";
}
)