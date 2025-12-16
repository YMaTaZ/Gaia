const images = [
  "img1.png",
  "img2.png",
  "img3.png",
  "img4.png",
  "img5.png"
];

const texts = [
  "After 2050, humans live inside spacecraft for extended periods of time.",
  "Natural rhythms disappear. Day and night lose meaning.",
  "Isolation becomes a permanent condition, not a temporary state.",
  "Without familiar sensory cues, emotional stability begins to weaken.",
  "In deep space, the feeling of home must be rebuilt."
];

let index = 0;

const bg = document.getElementById("bg-image");
const caption = document.getElementById("caption");

document.body.addEventListener("click", () => {
  caption.style.opacity = 0;

  setTimeout(() => {
    index = (index + 1) % images.length;
    bg.src = images[index];
    caption.innerText = texts[index];
    caption.style.opacity = 1;
  }, 500);
});
