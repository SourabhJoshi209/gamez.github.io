var score = document.getElementById("score").innerHTML = "Score: " + score;
var character = document.getElementById("character");
var block = document.getElementById("block");
var road = document.getElementById("road");
var score = 0;
var flag = 1;

function jump() {
    "use strict";
    if (character.classList !== "animate") {
        character.classList.add("animate");
       
    }
    setTimeout(function () {
        
        character.classList.remove("animate");
    }, 700);
}
if (score > 1000) {
    block.addEventListener("click", function () {
        
        "use strict";
        block.style.animation = "block 500ms infinite linear";
    }, 500);
}

var checkDead = setInterval(function () {
    "use strict";
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top")),
        blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if (blockLeft < 120 && blockLeft > 20 && characterTop >= 220) {
        flag = 0;
        block.style.animation = "none";
        block.style.display = "none";
        
        
        
        window.alert("G A M E   O V E R");
        
       
    } else {
        if (flag === 1) {
            score = score + 1;
            document.getElementById("score").innerHTML = "Score: " + score;
        }
        
    }
}, 10);

