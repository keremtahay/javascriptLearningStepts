const azaltmaBtn=document.getElementById("azaltmaBtn");
const sifirlamaBtn=document.getElementById("sifirlamaBtn");
const arttirmaBtn=document.getElementById("arttirmaBtn");
const lblCounter=document.getElementById("lblCounter");
let sonuc= 0;

azaltmaBtn.onclick = function(){
    sonuc-=2;
    lblCounter.textContent = sonuc;
} 
sifirlamaBtn.onclick = function(){
    sonuc=0;
    lblCounter.textContent = sonuc;
} 
arttirmaBtn.onclick = function(){
    sonuc+=2;
    lblCounter.textContent = sonuc;
} 
