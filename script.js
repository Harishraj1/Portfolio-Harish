var closing_navbar = document.getElementById("closing_navbar")
var side_nav = document.querySelector(".side_nav")
var menu_bar = document.getElementById("menu_bar")
var sidenav_close = document.getElementById("sidenav_close")
var sidenav_close1 = document.getElementById("sidenav_close1")
var sidenav_close2 = document.getElementById("sidenav_close2")
var sidenav_close3 = document.getElementById("sidenav_close3")
var sidenav_close4 = document.getElementById("sidenav_close4")
var sidenav_close5 = document.getElementById("sidenav_close5")
closing_navbar.addEventListener("click",function(){
    side_nav.style.right ="-50%"
})
menu_bar.addEventListener("click",function(){
    side_nav.style.right = "0%"
})
sidenav_close.addEventListener("click",function(){
    side_nav.style.right ="-50%"
})
sidenav_close1.addEventListener("click",function(){
    side_nav.style.right ="-50%"
})
sidenav_close2.addEventListener("click",function(){
    side_nav.style.right ="-50%"
})
sidenav_close3.addEventListener("click",function(){
    side_nav.style.right ="-50%"
})
sidenav_close4.addEventListener("click",function(){
    side_nav.style.right ="-50%"
})
sidenav_close5.addEventListener("click",function(){
    side_nav.style.right ="-50%"
})


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});