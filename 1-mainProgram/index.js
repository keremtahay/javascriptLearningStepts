//console.log(`Selamlar`)
//console.log(`bugun tarih : 10.09.2026`)

//window.alert(`Merhaba Web Sayfam`)
//window.alert(`Bugun sınırısız pizza yedik`)

//document.getElementById("firstH1").textContent = `Selamun Aleyküm`;
//document.getElementById("firstP").textContent = "Aleykum Selam";

//kullanıcıdan değer almak (pop-up window ile)
//let username=window.prompt("İsmi nedir bu güzelliğin ?") ;
//console.log(username);

//kullanıcıdan değer almak (Textbox ile)

//------------------------------------------------------------------//

//let username;

//username = window.prompt("Merhaba İsmin nedir");

//console.log(username)

//------------------------------------------------------------------//

//let username;

//document.getElementById("button1").onclick=function(){
    //username = document.getElementById("text1").value;
    //console.log(username)

    //document.getElementById("myH1").textContent= `Hoş Geldin ${username}`}

//-------------------------------------------------------------------//
//let pi = 3.14;
//let yarıCap ;
//let cevre;


//yarıCap = window.prompt("Yarı Çap Değeri Giriniz : ");
//yarıCap = Number(yarıCap);
//cevre= pi*yarıCap*2;
//console.log(cevre);

//------------------------------------------------------------------//
//const Pİ = 3.14;
//let yariCap;
//let cevre;
//
//document.getElementById("btn1").onclick = function(){
//    yariCap=document.getElementById("txt1").value;
//    txt1=Number(txt1);
//    cevre= Pİ*yariCap*2;
//    document.getElementById("sonuc").textContent = cevre+ `cm`;
//}

//----------------------Ternary Operator-----------------------------//

/*
const age = 29;
const message = age >= 18 ? "Resmiyete göre bir yetişkinsin." : "Resmiyete göre çocuksun.";

console.log(message)*/ 


/*const toplamUcret = 125;
const indirim = toplamUcret >= 100 ? 10 :0;

console.log(`Toplam tutarınız $${toplamUcret - toplamUcret * (indirim / 100)}`); */

//-----------------------Switch Case-----------------------------------//

/*let gunler = window.prompt("1-7 arasi bri deger giriniz: ");
gunler = Number(gunler);


switch(gunler){
    case 1:
        console.log("Bugun gunlerden PAZARTESI");
        break;
    case 2:
        console.log("Bugun gunlerden SALI");
        break;
    case 3:
        console.log("Bugun gunlerden CARSAMBA");
        break;
    case 4:
        console.log("Bugun gunlerden PERSEMBE");
        break;                        
    case 5:
        console.log("Bugun gunlerden CUMA");
        break;
    case 6:
        console.log("Bugun gunlerden CUMARTESI");
        break;
    case 7:
        console.log("Bugun gunlerden PAZAR");
        break;
    default:
        console.log("Bu deger aralikta degil veya bir sayi degil");
}*/




/*let sinavNotu =Number( window.prompt("Sinav Notunuzu Giriniz: "));
let harfNotu;

switch(true){
    case sinavNotu >= 90:
        harfNotu = "A";
        break;
    case sinavNotu >= 80:
        harfNotu = "B" ; 
        break;  
    case sinavNotu >= 70:
        harfNotu = "C" ; 
        break;
    case sinavNotu >= 60:
        harfNotu = "D" ; 
        break;
    case sinavNotu >= 50:
        harfNotu = "E" ; 
        break;
    case sinavNotu >=40:
        harfNotu = "F" ;
        break;
    case sinavNotu < 39:
        console.log("Malesefki dersten kaldiniz")
}

console.log(`Sinav Notunuza göre Harf Notunuz : ${harfNotu}`);*/

/*--------------------------------------- For Yapısı -----------------------------*/ 

/*for(let i = 1; i<=10; i++){
    console.log(i);
}*/

/*---------------------------------------- Functions ------------------------------- */

/*let username = window.prompt("Lutfen Isminizi Giriniz : ");
let age = Number(window.prompt("Lutfen Yasinizi Giriniz : "));

function dogumGunuSarkisi(){
    console.log("Dogum Gunun Kutlu Olsun ");
    console.log("Dogum Gunun Kutlu Olsun ");
    console.log(`Dogum Gunun Kutlu Olsun ${username} `);
    console.log("Dogum Gunun Kutlu Olsun ");
    console.log(`Artik ${age + 1 } Yasindasin !!`);
}

dogumGunuSarkisi(); */




/*function ekle(x,y){
    return x+y;
}
function cıkart(x,y){
    return x-y;
}
function carp(x,y){
    return x*y;
}
function bol(x,y){
    return x/y;
}
function ciftSayi(sayi){
    return sayi % 2 === 0 ? true : false ;
}
function tekSayi(sayi1){
    return sayi1 % 2 !== 0 ? true:false;
}
x=Number(window.prompt("ilk degeri giriniz :"));
y=Number(window.prompt("ikinci degeri giriniz :"));
window.alert(` İki sayinin toplamı :${ekle(x,y)}`)
window.alert(` ${x} cift midir : ${ciftSayi(x)}`);
window.alert(` ${y} tek midir :${tekSayi(y)}`);*/



/*function validMail(email){ 
    if(email.includes("@")){
        window.alert("Evet bu mail gecerli");
    }else{
        window.alert("Malesef bu gecerli degil");
    }
}

let mail = window.prompt("Mail Adresinizi Giriniz :  ");

validMail(mail);*/

/*------------------------------ Callback -----------------------------------------*/

/*merhaba(username);

function merhaba(kerem){
    console.log("Merhaba !");
    kerem();
}

function username(){
    console.log("Benim ismim Kerem ");
}*/

/*toplam(displayPage,10,20);

function toplam(callback,x,y){
    let result = x+y;
    callback(result);
}
function displayResult(result){
    console.log(result);
}
function displayPage(result){
    document.getElementById("myH1").textContent = result;
}*/

/*---------------------------------- foreach ---------------------------------------------*/ 

/*let number = [1 , 2 , 3 , 4 , 5];
number.forEach(triple);
number.forEach(double);

number.forEach(display);

function double(element, index, array){
    array[index] = element * 2 ;
}

function triple(element, index, array){  /*Her zaman forEach kullanılırken sıralama böyle olmalı*//*
    array[index] = element * 3 ;
}

function display(element){
    console.log(element);
}*/




/*let meyveler = ["elma", "ayva", "armut", "karpuz", "kavun", "erik"];
meyveler.forEach(uppercase);
meyveler.forEach(display);

function uppercase(element, index, array){
    array[index] = element.toUpperCase();
}

function display(element){
    console.log(element);
}*/