

gsap.to(".papge2 #i1",{
    width: '80%',
    // scale:1,
    scrollTrigger:  {
        trigger: ".papge2",   //trigger parent when using pin 
        scroller: 'body',
        // markers: true,
       start: 'top 0',
       end: 'top -100%',
        scrub: true,
        pin: true,     /// it will stay on the screen untill the animation is complete
    }
})

gsap.to(".page3 h1",{
    transform:"translateX(-150%)",
    scrollTrigger:  {
        trigger: ".page3",   //trigger parent when using pin 
        scroller: 'body',
        markers: true,
       start: 'top 0%',
        end: 'top -100%',
        scrub: 2,
        pin: true,     /// it will stay on the screen untill the animation is complete
    }
})




