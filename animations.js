const topImage = document.querySelector(".img-container");

const tl = new TimelineMax();

tl.fromTo(topImage,1.2, { height: 0%, {height: "100%"}, ease: Power2.easeInOut});
