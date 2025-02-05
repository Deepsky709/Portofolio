let py = document.querySelector("#thing");



let animation = gsap.to("#lang", {
    y: 135,
    duration: 0.5,
    paused: true,
});

py.addEventListener("mouseenter", () => animation.play());
py.addEventListener("mouseleave", () => animation.reverse());