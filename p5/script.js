var tl = gsap.timeline()

tl.from(".nav h3",{
    y: -50,
    opacity:0,
    duration: .7,
    delat: .4,
    stagger: .1
})


tl.from(".data h1",{
    x: -50,
    opacity:0,
    duration: .7,
    delat: .4,
    stagger: .1
})