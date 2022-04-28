import gsap from 'gsap';

export default class HeaderAnimation {
	// Fixed header with GSAP animation
	static ScrollFunc(target) {
		let $scrollTop = window.pageYOffset || document.body.scrollTop;
		if ($scrollTop > 10 && !$(target).hasClass('scroll_mod')) {
			$(target).addClass('scroll_mod');
			gsap.to(target, {
				y: '-2.6rem',
				duration: 0.3,
				ease: 'power2.inOut',
			});
		} else if ($scrollTop < 10) {
			$(target).removeClass('scroll_mod');
			gsap.to(target, {
				y: 0,
				duration: 0.3,
				ease: 'power2.inOut',
			});
		}
	}
}
