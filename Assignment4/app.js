/* ==== Tab Switch ==== */

let loginBox = document.getElementById("login-box")
let registerBox = document.getElementById("register-box")
let loginImg = document.getElementById("img-login")
let registerIMG = document.getElementById("img-register")

const queryString = window.location.search
console.log(queryString)

const urlParams = new URLSearchParams(queryString)
const urlusername = urlParams.get("regis_username")
const urlpassword = urlParams.get("regis_pass")

console.log(urlusername)
console.log(urlpassword)


function registerTab(){
    event.preventDefault()  //to keep browser not refresh

    loginBox.classList.add("form_hidden")
    registerBox.classList.remove("form_hidden")
    loginImg.classList.add("form_hidden")
    registerIMG.classList.remove("form_hidden")
}
function loginTab(){
    event.preventDefault()  //to keep browser not refresh

    loginBox.classList.remove("form_hidden")
    registerBox.classList.add("form_hidden")
    loginImg.classList.remove("form_hidden")
    registerIMG.classList.add("form_hidden")
}


/* ==== Login & Register ==== */
window.onload = pageLoad

function pageLoad(){
    var form = document.getElementById("register-form")
    form.onsubmit = registerForm

    var myLogin = document.getElementById("login-form");
    myLogin.onsubmit = loginForm
}

function registerForm(){
    let dataFormIn = document.forms["myForm"]


    if(dataFormIn.regis_pass.value != dataFormIn.regis_repass.value){  //ดึงข้อมูลจาก name ของ input
        event.preventDefault()

        alert("Your password is not matching")
        return false
    }
    else{
        alert("Thanks for registration. \nTry to login Now")
    }
}

function loginForm(){
    event.preventDefault()

    let lusername = document.getElementById("username").value
    let lpassword = document.getElementById("password").value

    // ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
    if (urlusername == lusername && urlpassword == lpassword) {
        alert("Log in Finish");
    } else {
        alert("Log in Again");
        return false;
    }

    document.getElementById("username").value = null
    document.getElementById("password").value = null
    // console.log(lusername)
    // console.log(lpassword)
}

