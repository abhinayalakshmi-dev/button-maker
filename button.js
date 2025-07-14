
let bgColor = document.getElementById("bgColorInput");
let fontC = document.getElementById("fontColorInput");
let fontS = document.getElementById("fontSizeInput");
let fontW = document.getElementById("fontWeightInput");
let padding = document.getElementById("paddingInput");
let bdrRadius = document.getElementById("borderRadiusInput");
let button = document.getElementById("customButton");

function newButton() {
    let bg = bgColor.value;
    let size = parseInt(fontS.value);
    let color = fontC.value;
    let weight = parseInt(fontW.value);
    let pad = parseInt(padding.value);
    let rad = parseInt(bdrRadius.value);
    button.style.backgroundColor = bg;
    button.style.fontSize = size + "px";
    button.style.color = color;
    button.style.fontWeight = weight;
    button.style.padding = pad + "px";
    button.style.borderRadius = rad + "px";

}