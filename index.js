let arr =[];
let btn = document.querySelector(".btn");
let paswd = document.querySelector(".password");
btn.addEventListener("click",function password(){
const alphabet = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
'M', 'N', 'O', 'P', 'Q', 'R',  'S', 'T', 'U', 'V', 'W', 'X','Y', 'Z' ];
let num1 = Math.floor(Math.random()*25);
let a = alphabet[num1];
let b = Math.floor(Math.random()*10);
let num2 = Math.floor(Math.random()*25);
let c = alphabet[num2];
let d = Math.floor(Math.random()*10);
let num3 = Math.floor(Math.random()*25);
let e = alphabet[num3].toLowerCase();
const symbol = ["@", "&", "#", "*", "_"] ;
let num4 = Math.floor(Math.random()*4);
let f = symbol[num4];
let g = Math.floor(Math.random()*10);
let num5 = Math.floor(Math.random()*25);
let h = alphabet[num5].toLowerCase();
let pswd = a + b + c + d + e + f + g + h;
    paswd.textContent = pswd;
    arr.push(pswd);
    console.log(arr);
})