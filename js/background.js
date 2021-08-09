const images = [
  "img/bg-01.jpg",
  "img/bg-02.jpg",
  "img/bg-03.png"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url(${chosenImage})`;
