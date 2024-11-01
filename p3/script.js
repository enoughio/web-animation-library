var inital = `M 10 100 Q 500 100 990 100`
var final = `M 10 100 Q 500 100 990 100`

var string = document.querySelector(".string");


string.addEventListener("mousemove" , (dets) => {

    inital = `M 10 100 Q ${dets.x} ${dets.y} 990 100`
    gsap.to(".string svg path", {
        attr:{
            d: inital
        },
        duration: .3,
        ease: "power1.out",
    })

})


string.addEventListener("mouseleave" , () => {

    gsap.to(".string svg path", {
        attr:{
            d: final,
        },
        duration: 1,
        ease: "elastic.out(1,0.1)",
    })

})
