var keysPressedSoFar = "";

document.onkeyup = function (event) {
    var lastKeyPressed = event.key;
    if (lastKeyPressed != " ") {
        keysPressedSoFar += lastKeyPressed;
    } else {
        console.log(keysPressedSoFar);
        keysPressedSoFar = "";
    }
}