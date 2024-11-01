// gsap.to("#box",{
//     x:1000,
//     y:50,
//     duration: 2,
//     delay:1,
//     rotate:360,
//     backgroundColor: "yellow",
//     scale:2,
//     borderRadius:"50%"
//     yoyo: true,
//     stagger: 1,  //stagger: -1, to reverse the order of staggering

// }
// )


// gsap.from("#box2",{
//     x:1000,
//     y:50,
//     duration: 2,
//     delay:1,
//     rotate:360,
//     backgroundColor: "yellow",
//     scale:2,
//     borderRadius:"50%",
// }
// )


// gsap.to("h1", {
//     opacity:0,
//     y:20,
//     duration: 1,
//     delay: 1,
//     color: "red",
//     stagger: 1,  //stagger: -1, to reverse the order of staggering
// }
// )




// var tl = gsap.timeline();

// tl.to("#box",{
//     x:1000,
//     y:50,
//     duration: 2,
//     delay:1,
//     rotate:360,
//     backgroundColor: "yellow",
//     scale:2,
//     borderRadius:"50%",
//     yoyo: true,
// }
// ).to("#box2",{
//     x:1000,
//     y:50,
//     duration: 2,
//     rotate:360,
//     backgroundColor: "yellow",
//     scale:2,
//     borderRadius:"50%",
//     yoyo: true,
// }
// )



//finnal example

var tl = gsap.timeline()

tl.from("#amado", {
    opacity: 0,
    y:-20,
    duration: .4,
    delay: .5,
})
tl.from("#options h2", {
    opacity: 0,
    y:-20,
    duration: .5,
    stagger: .2,
})


gsap.from("#main", {
    opacity:0,
    scale: 0,
    duration:1,
})