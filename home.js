document.body.style.backgroundColor = "";
document.getElementById("box1").addEventListener("click", () => {
    document.body.style.backgroundColor = "rgb(78, 202, 161)";

})
document.getElementById("box2").addEventListener("click", () => {
    document.body.style.backgroundColor = "rgb(127, 140, 255)";

})
document.getElementById("box3").addEventListener("click", () => {
    document.body.style.backgroundColor = "rgb(195, 255, 127)";

})
document.getElementById("box4").addEventListener("click", () => {
    document.body.style.backgroundColor = "rgb(186, 122, 33)";

})

setInterval(() => {
    const rColor1 = Math.floor(Math.random()*255)
    const rColor2 = Math.floor(Math.random()*255)
    const rColor3 = Math.floor(Math.random()*255)
    document.getElementsByClassName("random")[0].style.backgroundColor =  `rgb(${rColor1}, ${rColor2}, ${rColor3})`
    const color = `rgb(${rColor1}, ${rColor2}, ${rColor3})`;

    document.getElementsByClassName("random")[0].addEventListener("click", () => {
        document.body.style.backgroundColor = `rgb(${rColor1}, ${rColor2}, ${rColor3})`;
    
    })


},1000)