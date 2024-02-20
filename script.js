var closing_navbar = document.getElementById("closing_navbar")
var side_nav = document.querySelector(".side_nav")
var menu_bar = document.getElementById("menu_bar")
closing_navbar.addEventListener("click",function(){
    side_nav.style.right ="-50%"
})
menu_bar.addEventListener("click",function(){
    side_nav.style.right = "0%"
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});