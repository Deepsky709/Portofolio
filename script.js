let py = document.querySelector(".t1");
let js = document.querySelector(".t2");
let rs = document.querySelector(".t3");
let rn = document.querySelector(".t4");


let animation = gsap.to(".l1", {
    y: 135,
    duration: 0.5,
    paused: true,
});

py.addEventListener("mouseenter", () => animation.play());
py.addEventListener("mouseleave", () => animation.reverse());

let animation2 = gsap.to(".l2", {
    y: 135,
    duration: 0.5,
    paused: true,
});

js.addEventListener("mouseenter", () => animation2.play());
js.addEventListener("mouseleave", () => animation2.reverse());

let animation3 = gsap.to(".l3", {
    y: 135,
    duration: 0.5,
    paused: true,
});

rs.addEventListener("mouseenter", () => animation3.play());
rs.addEventListener("mouseleave", () => animation3.reverse());

let animation4 = gsap.to(".l4", {
    y: 135,
    duration: 0.5,
    paused: true,
});

rn.addEventListener("mouseenter", () => animation4.play());
rn.addEventListener("mouseleave", () => animation4.reverse());

function aboutMe(){
    window.location.href = 'index.html';
}

function pyThon(){
    window.location.href = 'python.html';
    
}

function javaS(){
    window.location.href = 'java.html';
}

function lua(){
    window.location.href = 'lua.html';
}

function test(){
    window.location.href = 'test.html';
}

function intro(){
    gsap.from('#about', {
        x: -150,
        opacity: 0,
        duration: 1,
    });
    gsap.from('.t1', {
        y: 200,
        opacity: 0,
        duration: 0.8,
    });
    gsap.from('.t2', {
        y: 200,
        opacity: 0,
        duration: 1.1,
    });
    gsap.from('.t3', {
        y: 200,
        opacity: 0,
        duration: 1.4,
    });
    gsap.from('.t4', {
        y: 200,
        opacity: 0,
        duration: 1.7,
    });
}

function intro2(numb1, numb2){
    gsap.from('.I'+numb1, {
        y: 200,
        opacity: 0,
        duration: 1,
    });
    gsap.from('.I'+numb2, {
        y: 200,
        opacity: 0,
        duration: 1.5,
    });
}