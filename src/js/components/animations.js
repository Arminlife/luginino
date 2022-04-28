import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default class Animations {
	constructor(el) {
		this.$el = $(el);
		this.$arrow = this.$el.find('.main_hero__arrow');
		this.$arrowIcon = this.$arrow.find('.icon');
		this.$house = this.$el.find('.main_hero__house');
		this.$mainPlan = this.$el.find('.main_plan');
		this.$mainPlanBg = this.$el.find('.main_plan__picture');
		this.$houseItemLeft = document.querySelectorAll('.house_item__left');
		this.$houseItemRight = document.querySelectorAll('.house_item__right');
		this.$cloudLeft = this.$el.find('.cloud_left');
		this.$cloudRight = this.$el.find('.cloud_right');
		this.$sectionTitle = document.querySelectorAll('.section_title');
		this.$contactDecor = this.$el.find('.contact_us__decor');
		this.init();
	}

	init() {
		const {
			$el,
			$arrow,
			$arrowIcon,
			$house,
			$mainPlan,
			$mainPlanBg,
			$cloudLeft,
			$cloudRight,
			$houseItemLeft,
			$houseItemRight,
			$sectionTitle,
			$contactDecor,
		} = this;

		// arrow vertical animation
		gsap.to($arrowIcon, {
			y: '-1.6rem',
			duration: 1,
			delay: 1,
			ease: 'power2.inOut',
			repeat: -1,
			yoyo: true,
		});

		// cloud animation
		gsap.timeline({
			scrollTrigger: {
				trigger: $house,
				start: 'top bottom-=200',
				end: 'bottom bottom',
				scrub: 1,
			},
		})
			.fromTo($cloudLeft, { x: 0 }, { x: '-35rem' }, 0)
			.fromTo($cloudRight, { x: 0 }, { x: '35rem' }, 0);
		// scroll to house section
		$arrow.on('click', () => {
			$([document.documentElement, document.body]).animate(
				{ scrollTop: $house.offset().top + 150 },
				1000,
			);
		});
		// house list animation
		$houseItemLeft.forEach(el => {
			const $this = el;
			gsap.from($this, {
				x: '-6%',
				opacity: '0.6',
				scrollTrigger: {
					trigger: $this,
					scrub: true,
					end: '+=300',
				},
			});
		});
		$houseItemRight.forEach(el => {
			const $this = el;
			gsap.from($this, {
				x: '6%',
				opacity: '0.6',
				scrollTrigger: {
					trigger: $this,
					scrub: true,
					end: '+=300',
				},
			});
		});
		// section titles animation
		$sectionTitle.forEach(el => {
			const $this = el;
			gsap.from($this, {
				y: '30%',
				scrollTrigger: {
					trigger: $this,
					scrub: true,
					start: 'top bottom',
					end: 'top center+=100px',
				},
			});
		});
		// main plan picture parallax
		gsap.to($mainPlanBg, {
			y: '40%',
			scrollTrigger: {
				trigger: $mainPlan,
				scrub: true,
				start: 'top bottom',
				end: 'bottom top',
			},
		});

		// contact us decor animation
		gsap.to($contactDecor, {
			scaleX: 2.4,
			scaleY: 2.4,
			duration: 5,
			ease: 'power2.inOut',
			repeat: -1,
			yoyo: true,
		});
	}
}
