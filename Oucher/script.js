var tl = gsap.timeline();

tl.from("#nav",{
    opacity:0,
    delay:0.7,

})

tl.from("#nav h1, #nav #navpt2, #nav h4",{
    y:-90,
    opacity:0,
    duration:0.8,
    stagger:0.4
})

tl.from("#left h1",{
    x:-500,
    duration:0.7,
    opacity:0,
    stagger:0.4
})

tl.from("#right img",{
    scale:1,
    opacity:0,
    duration:0.5
})


gsap.from("#page2 .box",{
    scale:0,
    opacity:0,
    duration:0.8,
    stagger:0.4,
    scrollTrigger:{
        trigger:".box",
        scroller:"body",

    }
})