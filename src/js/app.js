gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

//Включаем только на устройствах без тачскрина
if (ScrollTrigger.isTouch !== 1) {
  ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content',
    smooth: 1.5,
    effects: true,
  })

  gsap.fromTo('.hero', { opacity: 1 }, {
    opacity: 0,
    scrollTrigger: {
      trigger: '.hero',
      start: 'center',
      end: '1500',
      scrub: true
    }
  })

  let itemsL = gsap.utils.toArray('.gallery__column--left .gallery__item')

  itemsL.forEach(item => {
    gsap.fromTo(item, { x: -100, opacity: 0 }, {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: item,
        start: '-850',
        end: '-100',
        scrub: true,
      }
    })
  });

  let itemsR = gsap.utils.toArray('.gallery__column--right .gallery__item')

  itemsR.forEach(item => {
    gsap.fromTo(item, { x: 100, opacity: 0 }, {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: item,
        start: '-850',
        end: '-100',
        scrub: true,
      }
    })
  });

}