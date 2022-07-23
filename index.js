// Nav Button Made Dynamic

let ham = document.querySelector('.ham img');

ham.addEventListener('click',dropMenu);
let sideBar = document.querySelector('.side-bar');


function dropMenu(element){
    if(sideBar.style.display == "block"){
        sideBar.style.display = "none";
        element.currentTarget.src = "images/Menu.jpg";
    }else{
        sideBar.style.display = "block";
        element.currentTarget.src = "images/menu2.jpg"
    }
}

function handelMedia(e){
    if(window.innerWidth > 700){
        sideBar.style.display = "none";
    }
}

window.addEventListener('resize', handelMedia)
