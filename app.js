let menu = document.querySelector(".menu")
let menuBtn = document.querySelector(".header-icon")
let menuBtnicon = document.querySelector(".header-icon i")
 
menuBtn.addEventListener ('click', function(){
    if(menuBtnicon.classList.contains("fa-bars")){
        menu.style.left="0"
        menuBtnicon.classList = "fa fa-times"
    }
    else{
        menu.style.left="-256px"
        menuBtnicon.classList ="fa fa-bars"
    }
})