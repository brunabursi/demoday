let info = document.querySelector('#panel');
let devs = document.querySelector('.devs');

function myFunction() {
    if (info.style.display === "none" || info.style.display === ""){
        info.style.display = "block";
        devs.style.position = "relative";
    } else {
        info.style.display = "none";
        devs.style.position = "absolute";
    }
}

