var menuHeader = document.getElementsByClassName("header-menu");
var contentHeader = document.getElementsByClassName("main-header");

function openMenu(){
        if(contentHeader[0].style.display != 'none'){
            contentHeader[0].style.display = 'none';
            menuHeader[0].style.display = 'flex'
        } else {
            contentHeader[0].style.display = 'flex';
            menuHeader[0].style.display = 'none';
        }
        
    }