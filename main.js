let red = 100;
let green = 100;
let blue = 100;

const changeColor = (e) => {
if(e.keyCode === 38 && red < 255){
red += 1;
green += 1;
blue += 1;
document.body.style.backgroundColor = `rgb (${red}, ${green}, ${blue})`;
}

 else if(e.keyCode === 40 && red > 255){
red -= 1; //red--;
green -= 1; //green--
blue -= 1; //blue--;
document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}
}



document.body.addEventListener("keyCode", changeColor)