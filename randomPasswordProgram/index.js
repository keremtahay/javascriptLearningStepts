function parolaOlusturma(uzunluk , kucukHarfler , buyukHarfler , sayilar, noktalamaIsaretleri){

    const uzunluk = 0;
    const kucukHarfler = "abcdefghijklmnoprqstuvwyz";
    const buyukharfler = "ABCDEFGHIJKLMNOPQRSTUVWYZ";
    const sayilar = "0123456789";
    const noktalamaIsaretleri = "!.<>,;:@€₺/*-+=";

    let kullanilanKarakterler = "";
    let password = "";

    kullanilanKarakterler += kucukHarfler ? kucukHarfler : "";
    kullanilanKarakterler += buyukHarfler ? buyukHarfler : "";
    kullanilanKarakterler += sayilar ? sayilar : "";
    kullanilanKarakterler += noktalamaIsaretleri ? noktalamaIsaretleri : "";

    console.log(kullanilanKarakterler);
/*    for(let i=0; i<=uzunluk ; i++){
        password = Math.floor(Math.random(kullanilanKarakterler[i]))
    }*/
    

    return " ";
}



const sifreUzunlugu = 12;
const sifreKucukHarfler = true;
const sifreBuyukHarfler = true;
const sifreSayilar = true;
const sifreNoktalama = true;

const password = parolaOlusturma(sifreUzunlugu , sifreKucukHarfler , sifreBuyukHarfler , sifreSayilar , sifreNoktalama);

console.log(`Rastgele Olusturulan Sifreniz : ${password}`);

