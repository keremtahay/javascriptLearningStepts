function parolaOlusturma(uzunluk , kucukHarfler , buyukHarfler , sayilar, noktalamaIsaretleri){

    const icerikKucukHarfler = "abcdefghijklmnoprqstuvwyz";
    const icerikBuyukHarfler = "ABCDEFGHIJKLMNOPQRSTUVWYZ";
    const icerikSayilar = "0123456789";
    const icerikNoktalamaIsaretleri = "!.<>,;:@€₺/*-+=";

    let kullanilanKarakterler = "";
    let password = "";

    kullanilanKarakterler += kucukHarfler ? icerikKucukHarfler : "";
    kullanilanKarakterler += buyukHarfler ? icerikBuyukHarfler : "";
    kullanilanKarakterler += sayilar ? icerikSayilar : "";
    kullanilanKarakterler += noktalamaIsaretleri ? icerikNoktalamaIsaretleri : "";

    if(uzunluk<=0){
        return "Sifrenizin güvenliği için en az 1 karakter kullanilmalidir.";
    }
    if(kullanilanKarakterler.length === 0){
        return "Boyle bir sifer olusturmaniza raazi olamayiz kb ."
    }
    
    for(let i=0; i<=uzunluk ; i++){
        let randomIndex = Math.floor(Math.random() * kullanilanKarakterler.length);
        password += kullanilanKarakterler[randomIndex];
    }
    

    return  password;
}



const sifreUzunlugu = 10;
const sifreKucukHarfler = true;
const sifreBuyukHarfler = true;
const sifreSayilar = true;
const sifreNoktalama = true;

const password = parolaOlusturma(sifreUzunlugu , sifreKucukHarfler , sifreBuyukHarfler , sifreSayilar , sifreNoktalama);

console.log(`Rastgele Olusturulan Sifreniz : ${password}`);

