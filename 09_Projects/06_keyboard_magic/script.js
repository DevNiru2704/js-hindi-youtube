const body = document.querySelector("body");
const displayBox = document.querySelector(".display-box");
const inputBox = document.querySelector("#input-box");
const keyboard = document.querySelector(".display-box p");

inputBox.value = "";

// Detect and handle keyboard input
body.addEventListener("keydown", function(e) {
    const key = e.key === " " ? "Space" : e.key;
    keyboard.innerHTML = key === "Unidentified" || key === "" ? "Backspace" : key;
    console.log(key);
});

// Focus input box on touch to enable swipe typing
body.addEventListener("touchstart", function() {
    inputBox.focus();
});

// Handle swipe typing or touch input
inputBox.addEventListener("input", function() {
    const inputText = inputBox.value.trim(); // Trim to remove extra spaces
    keyboard.innerHTML = inputText === "" ? "Space" : inputText;
    inputBox.value = ""; // Clear input to prepare for next swipe
});

// Check if the device supports touch
function is_touch_enabled() {
    return ('ontouchstart' in window) || 
           (navigator.maxTouchPoints > 0) || 
           (navigator.msMaxTouchPoints > 0);
}

if (is_touch_enabled()) {
    // Show mobile warning or adjust layout if necessary
    // This part of the code can be customized based on your requirements
}
