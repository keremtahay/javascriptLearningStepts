const txtYas = document.getElementById("txtYas");
const btnYas = document.getElementById("btnYas");
const pYas = document.getElementById("pYas");
let yas= 0;

btnYas.onclick=function(){

    yas = txtYas.value;
    yas = Number(yas)
    if(yas>=100){
        pYas.textContent = `COK YASLISIN BU SITEYE SENI SOKAMAM`;
    }
    else if(yas <18){
        pYas.textContent = `DAHA YENI DOGDUN BU SITEYE GIREMEZSIN`;
    }
    else if(yas >= 18){
        pYas.textContent = `SEN GIRIS YAPABILIRSIN`;
    }
    else{
        pYas.textContent = `YETERI KADAR BUYUK DEGILSIN DOSTUM!`;
    }
}