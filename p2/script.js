// gsap.from("#page1 #box", {
//     scale: 0,
//     rotate: 360,
//     duration: 2,
//     delay:1,
// })


// gsap.from("#page2 h1", {
//     scale: 0,
//     opacity: 0,
//     x:500,
//     duration: 2,
//     scrollTrigger: {
//         trigger:  "#page2 h1",
//         scroller: "body",
//         markers: true,
//         start: "top 50%" 
//     }
// })


// gsap.from("#page2 h2", {
//     scale: 0,
//     opacity: 0,
//     x:-500,
//     duration: 1,
//     scrollTrigger: {
//         trigger:  "#page2 h1",
//         scroller: "body",
//         markers: true,
//         start: "top 50%",
        
//     }
// }) 



// gsap.from("#page3 #box", {
//     scale: 0,
//     opacity: 0,
//     rotate:720,
//     duration: 2,
//     scrollTrigger: {
//         trigger:  "#page3",
//         scroller: "body",
//         markers: true,
//         scrub: 2,
//         start: "top 50%",
//         end: "top 10%"
//     }
// }) 



gsap.to("#pagex h1", {
    transform: "translateX(-165%)",
    scrollTrigger : {
        markers: true,
        trigger: "#pagex",
        start: "top 0%",
        end: "top -150%",
        scrub: 2,
        pin:true,
    }

})