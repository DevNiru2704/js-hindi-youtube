let colorPicker=document.querySelectorAll(".dimensions")
let body=document.querySelector("body")

colorPicker.forEach((color)=>{
    console.log(color)
    color.addEventListener("click",(e)=>{
        console.log(e)
        console.log(e.target)
        if(e.target.id === "white")
            body.style.backgroundColor=e.target.id
        if(e.target.id === "gray")
            body.style.backgroundColor=e.target.id
        if(e.target.id === "red")
            body.style.backgroundColor=e.target.id
        if(e.target.id === "purple")
            body.style.backgroundColor=e.target.id
    })
    
})