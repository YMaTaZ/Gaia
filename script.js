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

const imgEl = document.getElementById("image");
const textEl = document.getElementById("caption");

// 初始显示
imgEl.src = images[0];
textEl.innerText = texts[0];

requestAnimationFrame(() => {
  imgEl.style.opacity = 1;
  textEl.style.opacity = 1;
});

document.body.addEventListener("click", () => {
  // 淡出
  imgEl.style.opacity = 0;
  textEl.style.opacity = 0;

  setTimeout(() => {
    index = (index + 1) % images.length;
    imgEl.src = images[index];
    textEl.innerText = texts[index];

    // 淡入
    imgEl.style.opacity = 1;
    textEl.style.opacity = 1;
  }, 1000);
});
