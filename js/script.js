// *menu mobile open
const btnBurgerMenu = document.querySelector(".burger_menu_btn");
btnBurgerMenu.onclick = function(){
    document.querySelector(".burger_menu_icon").classList.toggle("burger_menu_icon_active");
    document.querySelector(".navbar_main_mobile").classList.toggle("menu_mobile_open");
};

// // *header fixed
// window.addEventListener("scroll", function(){
//     const header = document.querySelector(".header");
//     let scroll = window.scrollY;
//     if(scroll > 0){
//         header.classList.add("header_fixed")
//     }else{
//         header.classList.remove("header_fixed")
//     }
// })
