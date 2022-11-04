bgImages = ['0.jpeg','1.jpeg','2.jpeg','3.jpeg','4.jpeg','5.jpeg','6.jpeg'];

chosenImage = bgImages[Math.round(Math.random() * (bgImages.length-1))];

// const bg = document.createElement('img');
// bg.src = `img/${chosenImage}`;
// bg.id = "bg-image"

document.body.style.setProperty('background-image', `url("img/${chosenImage}")`);