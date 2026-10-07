
const translations = {
  en: {
    games:"GAMES", about:"ABOUT", contact:"CONTACT",
    hero1:"SMALL STUDIO.", hero2:"BIG DREAMS.",
    heroP:"Temir Game Studio is an independent game studio creating simple ideas, satisfying progression and fun experiences for everyone.",
    explore:"EXPLORE OUR GAMES", ourGames:"OUR GAMES",
    tagline:"Go higher. Upgrade. Fly again.",
    gameP:"A mobile rocket runner built around quick flights, meaningful upgrades and the constant push to reach a new altitude record.",
    coming:"COMING SOON", aboutEyebrow:"ABOUT",
    aboutP:"We are an independent game studio focused on accessible, replayable mobile games. We care about clear mechanics, satisfying progression and experiences that are easy to start and hard to put down.",
    mobile:"MOBILE GAMES", mobileP:"Easy to play.<br>Hard to put down.",
    player:"PLAYER FIRST", playerP:"Designed around<br>the player.",
    worlds:"NEW WORLDS", worldsP:"More games<br>are on the way.",
    privacy:"Privacy Policy", deletion:"Data Deletion", terms:"Terms of Service", rights:"All rights reserved."
  },
  tr: {
    games:"OYUNLAR", about:"HAKKIMIZDA", contact:"İLETİŞİM",
    hero1:"KÜÇÜK STÜDYO.", hero2:"BÜYÜK HAYALLER.",
    heroP:"Temir Game Studio; sade fikirleri, tatmin edici ilerleme sistemlerini ve eğlenceli deneyimleri oyuncularla buluşturan bağımsız bir oyun stüdyosudur.",
    explore:"OYUNLARIMIZI KEŞFET", ourGames:"OYUNLARIMIZ",
    tagline:"Daha yükseğe çık. Geliştir. Tekrar uç.",
    gameP:"Kısa uçuşlar, anlamlı geliştirmeler ve her seferinde yeni bir irtifa rekoruna ulaşma isteği üzerine kurulu mobil bir roket oyunu.",
    coming:"YAKINDA", aboutEyebrow:"HAKKIMIZDA",
    aboutP:"Erişilebilir ve tekrar oynanabilir mobil oyunlara odaklanan bağımsız bir oyun stüdyosuyuz. Net mekanikler, tatmin edici ilerleme ve kolay başlayıp bırakması zor deneyimler tasarlıyoruz.",
    mobile:"MOBİL OYUNLAR", mobileP:"Oynaması kolay.<br>Bırakması zor.",
    player:"OYUNCU ÖNCELİKLİ", playerP:"Oyuncu odaklı<br>tasarım.",
    worlds:"YENİ DÜNYALAR", worldsP:"Yeni oyunlar<br>yolda.",
    privacy:"Gizlilik Politikası", deletion:"Veri Silme", terms:"Hizmet Şartları", rights:"Tüm hakları saklıdır."
  }
};

function setLang(lang){
  if(!["tr","en"].includes(lang)) lang="en";
  localStorage.setItem("tgs-lang",lang);
  document.documentElement.lang=lang;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const v=translations[lang]?.[el.dataset.i18n];
    if(v!==undefined) el.innerHTML=v;
  });
  document.querySelectorAll("[data-lang]").forEach(b=>b.classList.toggle("active", b.dataset.lang===lang));
  document.querySelectorAll("[data-lang-panel]").forEach(p=>p.hidden=p.dataset.langPanel!==lang);
}
document.querySelectorAll("[data-lang]").forEach(b=>b.addEventListener("click",()=>setLang(b.dataset.lang)));
setLang(localStorage.getItem("tgs-lang") || "en");
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",e=>{
  const el=document.querySelector(a.getAttribute("href"));
  if(el){e.preventDefault();el.scrollIntoView({behavior:"smooth"});}
}));
