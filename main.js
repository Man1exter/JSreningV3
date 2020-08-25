let red = 100;
let green = 100;
let blue = 100;

const changeColor = (e) => {
if(e.keyCode === 38 && red < 255){
red += 2;
green += 2;
blue += 2;
document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

 else if(e.keyCode === 40 && red >= 0){
red -= 1; //red--;
green -= 1; //green--
blue -= 1; //blue--;
document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}
}



window.addEventListener("keydown", changeColor)