const images = [
  "img1.png",
  "img2.png",
  "img3.png",
  "img4.png",
  "img5.png"
];

const texts = [
  "After 2050, humans live inside spacecraft for extended periods of time.",
  "Natural cycles fade. Artificial light replaces day and night.",
  "Isolation becomes a constant psychological condition.",
  "Without sensory anchors, emotional stability weakens.",
  "In deep space, comfort must be deliberately reconstructed."
];

let index = 0;

const img = document.getElementById("scene-image");
const caption = document.getElementById("caption");

document.getElementById("scene").addEventListener("click", () => {
  img.style.opacity = 0;
  caption.style.opacity = 0;

  setTimeout(() => {
    index = (index + 1) % images.length;
    img.src = images[index];
    caption.innerText = texts[index];
    img.style.opacity = 1;
    caption.style.opacity = 1;
  }, 600);
});
