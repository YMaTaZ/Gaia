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

const scene = document.getElementById("scene");
const caption = document.getElementById("caption");

/* 初始状态 */
scene.style.backgroundImage = `url(${images[0]})`;
caption.innerText = texts[0];

requestAnimationFrame(() => {
  caption.style.opacity = 1;
});

document.body.addEventListener("click", () => {
  caption.style.opacity = 0;

  setTimeout(() => {
    index = (index + 1) % images.length;
    scene.style.backgroundImage = `url(${images[index]})`;
    caption.innerText = texts[index];
    caption.style.opacity = 1;
  }, 600);
});
