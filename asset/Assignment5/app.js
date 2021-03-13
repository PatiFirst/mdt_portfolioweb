window.onload = pageLoad

function pageLoad(){
    let btnStart = document.getElementById("btn-start")
    btnStart.onclick = startGame
}

//When click on "Start" button
function startGame(){
    let btnStart = document.getElementById("btn-start")
    let btnSubtitle = document.getElementById("btn-sub")

    let numbox = document.getElementById("number_box").value;

    if(numbox === ""){
        console.log("NO")
        alert("Input the number of box")
    }
    else{
        alert("Ready");
    
        btnStart.style.display = "none"
        btnSubtitle.style.display = "none"
        
        addBox();
        timeStart();
    }

}

function timeStart(){
    var TIMER_TICK = 1000;
	var timer = null;
	var min = 0.5; // 0.5 minute
	var second = min*60; 
	var x = document.getElementById('timer-Text');


    x.innerHTML = second //Show 30 sec. "First"

	//setting timer using setInterval function
	timer = setInterval(timeCount,TIMER_TICK);
	
	function timeCount(){
        let btnStart = document.getElementById("btn-start")
        let btnSubtitle = document.getElementById("btn-sub")
        let numbox = document.getElementById("number_box");
		var allbox = document.querySelectorAll("#sq-container div"); //Select "#sq-container" and "div" in tempbox

        // จัดการเกี่ยวกับเวลา เช่น ถ้ายังมีกล่องเหลืออยู่ เวลาจะลดลงเรื่อยๆ 
        second = second - 1
        x.innerHTML = second

        // ถ้าไม่มีกล่องเหลือแล้ว และเวลายังเหลืออยู่จะขึ้นว่า You win!
        if(second > 0 && allbox.length == 0){
            alert("You Win")

            //Stop SetInterval in "timer"
            clearInterval(timer)
            timer = null // time = 0

            clearScreen()
            x.innerHTML = null
                
            btnStart.style.display = "inline-block"
            btnSubtitle.style.display = "inline-block"
            numbox.value = ""
        }
		
        // ถ้าเวลาหมด แต่ยังมีกล่องเหลืออยู่ จะบอกว่า Game over และทำการ clear screen
        else if(second == 0 && allbox.length > 0){
            setTimeout(() => {
                alert("Your Lose")
            clearInterval(timer)
            timer = null

            clearScreen()
            x.innerHTML = null

            btnStart.style.display = "inline-block"
            btnSubtitle.style.display = "inline-block"
            numbox.value = ""
            }, 300); 
        }
	}
}

function addBox(){
	// สร้างกล่องตาม input ที่เราใส่ 
	var numbox = document.getElementById("number_box").value;
	var gameContainer = document.getElementById("sq-container");
	var colorDrop = document.getElementById("colorBox").value;

	for (var i = 0; i < numbox ; i++){
        //Add a Box in "sq-container"
		var tempbox = document.createElement("div");
		tempbox.className = "square";
		tempbox.id = "box" + i;

        //Style of Box
        tempbox.style.backgroundColor = colorDrop

        //Random Box Target
		tempbox.style.left = Math.random() * (500 - 25) + "px";
		tempbox.style.top = Math.random() * (500 - 25) + "px";

		//add element to HTML node
		gameContainer.appendChild(tempbox);

        //Call Func. when click the box
		bindBox(tempbox);
	}
}


function bindBox(box){
    let gameLayerCurrent = document.getElementById("sq-container")

	//เมื่อกดแล้ว กล่องจะหายไป
	box.onclick = function(){
        gameLayerCurrent.removeChild(box)
	}
}

function clearScreen(){
	// ทำการลบ node ของกล่องทั้งหมด ออกจาก หน้าจอ

	var allbox = document.querySelectorAll("#sq-container div");
    let gameLayerCurrent = document.getElementById("sq-container")

	//delete all  div
	for (var i = 0; i < allbox.length ; i++){
		gameLayerCurrent.removeChild(allbox[i])
	}
}
