let ham = document.querySelector('.ham img');

ham.addEventListener('click',dropMenu);
let sideBar = document.querySelector('.side-bar');
function dropMenu(element){
    if(sideBar.style.display == "block"){
        sideBar.style.display = "none";
        element.currentTarget.src = "/Projects/Personal Portfolio/images/Menu.jpg";
    }else{
        sideBar.style.display = "block";
        element.currentTarget.src = "/Projects/Personal Portfolio/images/menu2.jpg"
    }
}
