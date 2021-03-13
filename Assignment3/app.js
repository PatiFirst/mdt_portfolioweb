let post1 = document.getElementById('topic1')
let post2 = document.getElementById('comment1')
let post3 = document.getElementById('comment2')
post1 = 0
post2 = 0
post3 = 0

function onClickPost() {
    let text = document.getElementById('text1').value
    if(post1 == 0){
        console.log(text)
        document.getElementById('topic1').innerHTML = text
        document.getElementById('text1').value = ""
        post1 = 1
    }
    
    else if(post1 != 0 && post2 == 0){
        console.log(text)
        document.getElementById('comment1').innerHTML = text
        document.getElementById('text1').value = ""
        post2 = 1
    }
    else if(post1 != 0 && post2 != 0 && post3 == 0){
        console.log(text)
        document.getElementById('comment2').innerHTML = text
        document.getElementById('text1').value = ""
        post3 = 1
    }
    else{
        console.log("Full")
        document.getElementById('comment2').innerHTML = 'Click "Clear" to clear every Post'
        document.getElementById('text1').value = ""
    }
}
function onClickClear(){
    document.getElementById('topic1').innerHTML = ""
    document.getElementById('comment1').innerHTML = ""
    document.getElementById('comment2').innerHTML = ""
    document.getElementById('text1').value = ""
}
