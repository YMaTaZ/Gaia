const images = [
  "./img1.png",
  "./img2.png",
  "./img3.png",
  "./img4.png",
  "./img5.png"
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

// 初始化（双保险）
scene.style.backgroundImage = `
  radial-gradient(
    ellipse at center,
    #0f2a44 0%,
    #081726 55%,
    #000000 100%
  ),
  url(${images[0]})
`;
caption.innerText = texts[0];

document.body.addEventListener("click", () => {
  index = (index + 1) % images.length;

  scene.style.backgroundImage = `
    radial-gradient(
      ellipse at center,
      #0f2a44 0%,
      #081726 55%,
      #000000 100%
    ),
    url(${images[index]})
  `;

  caption.innerText = texts[index];
});
