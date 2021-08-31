$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    dots: false,
    margin: 60,
    responsive: {
      0: {
        items: 1.5,
        margin: 16,
      },
      599: {
        items: 3,
        margin: 32,
      },
      1300: {
        items: 3,
      },
    },
  });
});
gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline({ defaults: { duration: 1 } });
tl.from('.animated-title-1 path', {
  y: 50,
  stagger: 0.2,
  opacity: 0,
});
tl.from(
  '.members--info .col-10',
  {
    y: 200,
    stagger: 0.2,
    opacity: 0,
    duration: 2,
  },
  '-=2.5'
);
tl.from(
  '.members--info_text .anim',
  {
    y: 50,
    stagger: 0.2,
    opacity: 0,
  },
  '-=3'
);
gsap.from('.member--list_card', {
  scrollTrigger: { trigger: '.member--list', toggleActions: 'restart none none none' },
  y: 150,
  stagger: 0.2,
  opacity: 0,
  duration: 2,
});
gsap.from('.animated-title-2 path', {
  scrollTrigger: { trigger: '.section-resources', toggleActions: 'restart none none none' },
  y: 50,
  stagger: 0.2,
  opacity: 0,
  duration: 1,
});
gsap.from('.resources--info .col-10', {
  scrollTrigger: { trigger: '.resources--info', toggleActions: 'restart none none none' },
  y: 200,
  stagger: 0.2,
  opacity: 0,
  duration: 2,
});
gsap.from('.resources--info_text .anim', {
  scrollTrigger: { trigger: '.section-resources', toggleActions: 'restart none none none' },
  y: 50,
  stagger: 0.2,
  opacity: 0,
});
gsap.from('.categories--list_card', {
  scrollTrigger: { trigger: '.resources--categories', toggleActions: 'restart none none none' },
  y: 150,
  stagger: 0.2,
  opacity: 0,
  duration: 1,
});
gsap.from('.resources--list_card', {
  scrollTrigger: { trigger: '.resources--featured', toggleActions: 'restart none none none' },
  y: 150,
  stagger: 0.2,
  opacity: 0,
  duration: 1,
});
