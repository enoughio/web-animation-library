gsap.from(".papge1 .circle",{
    scale: 0,
    opacity: 0,
    duration: .7,
    rotate: 879,
})

gsap.from(".papge2 .circle",{
    scale: 0,
    opacity: 0,
    duration: .7,
    rotate: 879,
    scrollTrigger: {
            trigger : '.papge2 .circle',  // to whome apply
            markers: true,
            start: "top: 80%",
            end: "top: 30%",
            scrub: 1,
    }

})
// gsap.from(".papge3 .circle",{
//     scale: 0,
//     opacity: 0,
//     duration: .7,
//     rotate: 879,
// })
// gsap.from(".papge4 .circle",{
//     scale: 0,
//     opacity: 0,
//     duration: .7,
//     rotate: 879,
// })