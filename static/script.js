let info = document.querySelector('#panel');
let devs = document.querySelector('.devs');

function showInfo() {
    if (info.style.display === "none") {
        info.style.display = "block";
    } else {
        info.style.display = "none";
        devs.style.position = "relative";
    }
}