const title = document.querySelector("#heading");
const keyframes = {
    opacity: [0, 1],
    translate: ["0 50px", 0]
};
const options = {
    duration: 2000,
    easing: "ease",
}
title.animate(keyframes, options);



const show = (entries) => {
    const key = {
        opacity: [0, 1],
        translate: ["0 100px", 0]
    };
    entries[0].target.animate(key, 600);
};
const showobserver = new IntersectionObserver(show);
showobserver.observe(document.querySelector("#show"));