var main = document.querySelector(".main");
var cursor = document.querySelector(".cursor");
var imageDiv = document.querySelector(".image");


main.addEventListener("mousemove", (events)=>{
    gsap.to(cursor,{
        x:events.x,
        y:events.y,
        duration:1,
        ease: "back.out(1.7)",
    })
})



imageDiv.addEventListener("mouseenter", (dets)=>{
    cursor.innerHTML="view",
    gsap.to(cursor, {
        scale: 2,
        opacity: .6,
    })
})


imageDiv.addEventListener("mouseleave", (dets)=>{
    cursor.innerHTML=""
    gsap.to(cursor, {
        scale: 1,
        opacity: .6,
    })
})
