const buttons = document.querySelector(".buttons");
const divBackground = document.querySelector(".color")
const colorId=document.querySelector(".color-id")
colorId.style.display="none"
let change;
buttons.addEventListener("click", function (e) {
    if (e.target.innerHTML === "Start") {
        change = setInterval(changeBackground, 1000, "start")
        // console.log("Color Change Started")
    }
    else {
        // console.log("Color Change Stopped")
        clearInterval(change)
        change=null
        changeBackground("stop")
    }
})

function changeBackground(str) {
    
    if (str === "start") {
        colorId.style.display="block"
        const red = Math.floor(Math.random() * 255)
        const blue = Math.floor(Math.random() * 255)
        const green = Math.floor(Math.random() * 255)
        colorId.innerHTML=`Red: ${red}, Green: ${green}, Blue: ${blue}`
        divBackground.style.backgroundColor = `rgb(${red},${green},${blue})`
        // console.log(`Red: ${red}, Green: ${green}, Blue: ${blue}`)
        
    } else {
        colorId.style.display="none"
        colorId.innerHTML=""
        divBackground.style.backgroundColor = `white`
    }
    return;
}