
// if if if if if i f iff i fi f 
//---------------------------------------
//--------------------------------------------
//-------------------------------------------------
let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
const changeColor = (e) => {

// document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

// const changeColor = (e) => {
// if(e.keyCode === 38 && red < 255){
// red += 2;
// green += 2;
// blue += 2;
// document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
// }

//  else if(e.keyCode === 40 && red >= 0){
// red -= 1; //red--;
// green -= 1; //green--
// blue -= 1; //blue--;
// document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
// }
// }

// switch switch switch -----------------------------
//----------------------- switch switch switch ---

switch(e.keyCode){
    case 38:
        document.body.style.backgroundColor = `rgb(${red < 255 ? ++red : red}, ${green < 255 ? ++green : green}, ${blue < 255 ? ++blue : blue})`;
        break;

    case 40:
        document.body.style.backgroundColor = `rgb(${red > 0 ? red-- : red}, ${green > 0 ? --green : green}, ${blue > 0 ? --blue : blue})`;
        break;

        //color wiekszy/mniejszy (od) ? oddejmij/dodaj : do.
        //color wiekszy/mniejszy (od) ? oddejmij/dodaj : do.
        //color wiekszy/mniejszy (od) ? oddejmij/dodaj : do.

}


}
window.addEventListener("keydown", changeColor)
