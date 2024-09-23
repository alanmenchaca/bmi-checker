import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

gsap.timeline({
    defaults: {ease: 'power1.out', opacity: 0, y: 50},
})
    .from('.main-text', {})
    .from('#cta-btn', {})
    .from('#info-text', {})
    .from('#main-img', {scale: 0.85}, '-=0.5')
    .from('#arrow-text-circle', {})
    .to('#text-circle', {
        ease: 'none', opacity: 1, y: 0,
        rotation: 360, repeat: -1, duration: 50,
    }, '+=0.2');

// ###################################################################

gsap.timeline(loadTimeLineDefaultSetting('#calculator-section'))
    .from('#calculator-section', {})
    .from('#bmi-calculator', {});

gsap.timeline(loadTimeLineDefaultSetting('#result-means-section'))
    .from('#result-means-section', {})
    .from('#measure-tape-img', {scale: 0.9});

gsap.timeline(loadTimeLineDefaultSetting('#ble-section'))
    .from('#ble-section', {})
    .from('#ble-info-cards', {});

gsap.timeline(loadTimeLineDefaultSetting('#bmi-limitations-section'))
    .from('#bmi-limitations-main-text', {})
    .from('.limitation-card', {stagger: 0.2});

function loadTimeLineDefaultSetting(trigger) {
    const scrollTriggerDefaultSetting = {
        trigger: trigger,
        start: '5px 80%',
        // markers: true
    }

    return {
        defaults: {ease: 'power1.out', opacity: 0, y: 20},
        scrollTrigger: scrollTriggerDefaultSetting
    }
}