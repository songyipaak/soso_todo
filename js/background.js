const body = document.querySelector("body");

const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];
// 랜덤선택

const bgImage = document.createElement("img");
// 자바스크립트가 html대신 해줌

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
// body에 html을 오버라이딩 시킴
