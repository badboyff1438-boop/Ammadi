const page1=document.getElementById("page1");
const page2=document.getElementById("page2");
const page3=document.getElementById("page3");
const page4=document.getElementById("page4");
const heart=document.getElementById("heart");
const letterCover=document.getElementById("letterCover");
const music=document.getElementById("music");

const card1=document.getElementById("card1");
const card2=document.getElementById("card2");
const card3=document.getElementById("card3");
const cardFinal=document.getElementById("cardFinal");
const yesBtn=document.getElementById("yesBtn");
const noBtn=document.getElementById("noBtn");
const nextBtn=document.getElementById("nextBtn");

let currentCard=0;
const cards=[card1,card2,card3,cardFinal];

// Floating hearts
function createHeart(){
  const h=document.createElement("div");
  h.className="heartFloat";
  h.innerHTML="💖";
  h.style.left=Math.random()*100+"vw";
  h.style.bottom="-20px";
  h.style.animationDuration=(Math.random()*3+3)+"s";
  document.body.appendChild(h);
  setTimeout(()=>h.remove(),6000);
}
setInterval(createHeart,400);

// PAGE 1: Tap heart
heart.addEventListener("click",()=>{
  music.play();
  page1.classList.add("hidden");
  page2.classList.remove("hidden");
  yesBtn.style.display="inline-block";
  noBtn.style.display="inline-block";
});

// NO button playful
function moveNo(){
  const x=Math.random()*200-100;
  const y=Math.random()*80-40;
  noBtn.style.transform=`translate(${x}px,${y}px)`;
  alert("NO button press cheyyali anukunnav… kani fate ki vere plans unnayi 😜✨");
}
noBtn.addEventListener("mouseover",moveNo);
noBtn.addEventListener("click",moveNo);

// YES button: open letter
yesBtn.addEventListener("click",()=>{
  page2.classList.add("hidden");
  page3.classList.remove("hidden");
});

// Tap letter to reveal cards
letterCover.addEventListener("click",()=>{
  letterCover.classList.add("open"); // realistic open
  setTimeout(()=>{
    page3.classList.add("hidden");
    page4.classList.remove("hidden");
    currentCard=0;
    showNextCard();
  },600);
});

// Next button inside letter
function showNextCard(){
  if(currentCard<cards.length){
    const card=cards[currentCard];
    card.classList.add("show");
    if(currentCard===cards.length-1){
      card.classList.add("glow");
      nextBtn.style.display="none";
      return;
    }
    currentCard++;
  }
}
nextBtn.addEventListener("click",showNextCard);
