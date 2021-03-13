window.onload = pageLoad

function pageLoad(){
    let btn = document.getElementById("wow")

    btn.onclick = hello
}


function hello(){
    alert("ok")
}