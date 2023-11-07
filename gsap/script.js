gsap.from(" #pg1 #box",{
    y:400,
    scale:0,
    delay:1,
    duration:2
    
})
gsap.from(" #pg2 #box",{
    y:400,
    scale:0,
    duration:2,
    // scrollTrigger:"#pg2 #box"
    scrollTrigger:{
        trigger:"#pg2 #box",
        scroller:"body"
    }
    
})