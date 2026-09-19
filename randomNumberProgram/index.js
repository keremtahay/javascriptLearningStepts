const btn1 = document.getElementById("btn1");
const myLabel = document.getElementById("myLabel");
const myLabel2 = document.getElementById("myLabel2");
const myLabel3 = document.getElementById("myLabel3");
const min =1;
const max = 6;
let random1;
let random2;
let random3;

btn1.onclick= function(){

    random1=Math.floor(Math.random() * max) + min;
    myLabel.textContent= random1;

    random2=Math.floor(Math.random() * max) +min;
    myLabel2.textContent = random2;

    random3 = Math.floor(Math.random()*max)+min;
    myLabel3.textContent = random3;
    
}
