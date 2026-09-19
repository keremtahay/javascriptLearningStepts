const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let denemeler = 0; 
let guess ;
let running = true ;

console.log(answer);
while(running){
    guess = window.prompt(`${minNum} ve ${maxNum} arasinda bir deger tutunuz : `);
    guess = Number(guess);
    
    if(isNaN(guess)){
        window.alert("Lutfen bir sayi giriniz :");

    }else if(guess < minNum || guess > maxNum){
        window.alert(`Lutfen ${minNum} ile ${maxNum} degerleri arasında bir deger giriniz !`);
    
    }else{
        denemeler ++;
        if(guess < answer){
            window.alert("GIRDIGINIZ DEGER COK KUCUK !");
            
        }else if(guess > answer){
            window.alert("GIRDIGINIZ DEGER COK BUYUK !");
            
        }else {
            window.alert(`TEBRIKLER TAM NOKTA ATISI YAPTINIZ. TOPLAMDA ${denemeler} DENEMEDE DOGRU SONUCA ULASTINIZ !`)
            running = false;
        }
    }
  


}
