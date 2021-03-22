/* ==== Active Link ==== */
let navlinks = document.getElementsByClassName("nav-link")

// Loop through the nav-link and add the active class to the current/clicked nav-link
for (let i = 0; i < navlinks.length; i++) {
    navlinks[i].addEventListener("click", function() {
        console.log("active")

        let current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active", "");
        this.className += " active";
  });
}

/* ==== Navbar Background color changed ==== */
const scrollY = window.pageYOffset

function scrollNav(){
    const nav = document.getElementById("nav")

    //Scroll 2 step navbar background will change color
    if(this.scrollY >= 400){
        nav.classList.add("navbar-light")
        nav.classList.add("bg-light")
        nav.classList.remove("navbar-dark")
        nav.classList.remove("bg-dark")
    }
    else{
        nav.classList.remove("navbar-light")
        nav.classList.remove("bg-light")
        nav.classList.add("navbar-dark")
        nav.classList.add("bg-dark")
    }
}
window.addEventListener("scroll", scrollNav)

/* ==== Show Scroll Top ==== */
function scrollTop() {
    const scrollTop = document.getElementById("scroll-top")

    if(this.scrollY >= 500){
        scrollTop.classList.add("show-scroll")
    }
    else{
        scrollTop.classList.remove('show-scroll')   
    }
}
window.addEventListener("scroll", scrollTop)