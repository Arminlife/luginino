import Swiper, { Navigation, Pagination } from 'swiper';

export default class Sliders {
	// House Slider
	static HouseSlider(target) {
		const houseSwiper = new Swiper(target, {
			modules: [Navigation, Pagination],
			spaceBetween: 0,
			loop: false,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});
	}

	static PlanSlider(target) {
		const planSwiper = new Swiper(target, {
			modules: [Pagination],
			spaceBetween: 0,
			loop: false,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
				renderBullet: (index, className) => {
					return `<span class='${className}'>${(index + 1)}</span>`;
				},
			},
		});
	}

	static OtherHouseSlider(target) {
		const otherHouseSwiper = new Swiper(target, {
			modules: [Navigation, Pagination],
			slidesPerView: 3,
			spaceBetween: 0,
			loop: false,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
		});
	}
}
