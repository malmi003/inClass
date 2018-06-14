
var keysPressed = "";
document.onkeyup = function(event) {
    //this function will run every time you press a key
    // console.log(event.key)

    var lastKeyPressed = event.key;

    if (lastKeyPressed === " ") {
        //display the word
        console.log(keysPressed);
        var pTag = document.getElementById("lastWordTyped");

        console.log(pTag);
        pTag.textContent = keysPressed;
        keysPressed = "";
    }
    else if (lastKeyPressed.length===1){
        keysPressed += lastKeyPressed;
    }


}