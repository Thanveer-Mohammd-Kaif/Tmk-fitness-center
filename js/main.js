/* NAVBAR TOGGLE ANIMATION JAVASCRIPT */
function openNav(){
    document.getElementById("sidebar").style.width = "78%";
}
function closeNav(){
    document.getElementById("sidebar").style.width = "0%";
}

/* CHANGE COLOR ON SCROLL ANIMATION JAVASCRIPT */

function changebg(){
    var navbar = document.getElementById("navbar");
    var scrollvalue = window.scrollY;
    if(scrollvalue < 80 ){
        navbar.classList.remove("bgcolor");
    }
    else{
        navbar.classList.add("bgcolor");
    }
}
window.addEventListener('scroll',changebg);
