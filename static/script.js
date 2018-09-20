let info = document.querySelector('#panel');
let devs = document.querySelector('.devs');
let footer = document.querySelector('footer');

function showInfo() {
    if (info.style.display === "none") {
        info.style.display = "block";
        footer.style.position = "inherit";
    } else {
        info.style.display = "none";
        devs.style.position = "relative";
        footer.style.position = "absolute";
    }
}