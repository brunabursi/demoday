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
    window.location.href='usu';
}
)

empresa.addEventListener('click', ()=>{
    window.location.href='enterprise';
}
)

