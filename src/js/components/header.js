import HeaderAnimation from './header_animation';

export default class Header {
	constructor(el) {
		this.$el = $(el);
		this.$trigger = this.$el.find('.menu_trigger');
		this.init();
	}

	init() {
		const { $el, $trigger } = this;
		$trigger.on('click', () => {
			$trigger.toggleClass('active_mod');
		});
		window.addEventListener('scroll', () => {
			HeaderAnimation.ScrollFunc($el);
		});
	}
}
