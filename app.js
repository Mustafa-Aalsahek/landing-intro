TweenMax.to(".loading-screen", 4, {
    delay: 6.6,
    top: "-110%",
    ease: Expo.easeInOut
});
var t1 = new TimelineMax();

t1.from(".ringOne", 4, {
    delay: 0.4,
    opacity: 0,
    y:40,
    ease: Expo.easeInOut
}).from(".ringTwo", 4, {
    delay: 0.9,
    opacity: 0,
    y: 40,
    ease: Expo.easeInOut
}, "-=5").to(".ringOne", 4, {
    delay: 0.4,
    x: 40,
    ease: Expo.easeInOut
}).to(".ringTwo", 4, {
    delay: 0.9,
    x: 40,
    ease: Expo.easeInOut
},"-=5");