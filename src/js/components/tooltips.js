import tippy from 'tippy.js';

export default class Tooltips {
	constructor(el) {
		this.$el = $(el);
		this.$tooltip = this.$el.find('.tooltip');
		this.init();
	}

	init() {
		const { $el, $tooltip } = this;
		$tooltip.each(function initTooltip(index) {
			let $this = $(this);
			const template = document.getElementById(`tooltip${index}`);
			tippy($this[0], {
				trigger: 'click',
				animation: 'scale',
				interactive: true,
				zIndex: 3,
				content(reference) {
					const id = reference.getAttribute('data-template');
					return template.innerHTML;
				},
				allowHTML: true,
			});
		});
	}
}
