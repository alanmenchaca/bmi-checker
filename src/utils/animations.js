import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ###################################################################

gsap.timeline({
    defaults: {ease: 'power1.out', opacity: 0, y: 20, duration: 0.2},
})
    .from('.main-text', {})
    .from('#cta-btn', {})
    .from('#info-text', {})
    .from('#main-img', {scale: 0.85, duration: 0.2}, '-=0.5')
    .from('#arrow-text-circle', {})
    .to('#text-circle', {
        ease: 'none', opacity: 1, y: 0, duration: 50,
        rotation: 360, repeat: -1,
    }, '+=0.2');

// ###################################################################

function loadTimeLineDefaultSetting(trigger) {
    const scrollTriggerDefaultSetting = {
        trigger: trigger,
        start: '5px 80%',
        // markers: true
    }

    return {
        defaults: {ease: 'power1.out', opacity: 0, y: 20, duration: 0.5},
        scrollTrigger: scrollTriggerDefaultSetting
    }
}

gsap.timeline(loadTimeLineDefaultSetting('.calculator-section'))
    .from('.calculator-section', {})
    .from('#bmi-calculator', {duration: 0.2});

// ###################################################################

gsap.timeline(loadTimeLineDefaultSetting('.result-means-section'))
    .from('.result-means-section', {})
    .from('#measure-tape-img', {scale: 0.9, duration: 0.2});
