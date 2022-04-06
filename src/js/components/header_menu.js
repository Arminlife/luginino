export default class HeaderMenu {
	constructor(el) {
		this.$el = $(el);
		this.$trigger = this.$el.find('.menu_trigger');
		this.$headerContent = this.$el.find('.simple_header__inner');
		this.init();
	}

	init() {
		const { $trigger, $headerContent } = this;
		$trigger.on('click', () => {
			$trigger.toggleClass('active_mod');
			$headerContent.slideToggle();
		});
	}
}
