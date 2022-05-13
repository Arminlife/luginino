// ------------------- imports
import $ from 'jquery';
import { GLOBAL_VARS } from 'utils/constants';
import { documentReady, pageLoad } from 'utils';
import pageWidgetInit from './dev_vendors/dev_widget';
// ------------------- imports###

// ------------------  import components
import Header from './components/header';
import HeaderAnimation from './components/header_animation';
import Animations from './components/animations';
import Tooltips from './components/tooltips';
import Sliders from './components/sliders';
// ------------------  import components###

window.jQuery = $;
window.$ = $;

const styles = ['color: #fff', 'background: #cf8e1f'].join(';');
const message = 'Developed by Glivera-team https://glivera-team.com/';
// eslint-disable-next-line no-console
console.info('%c%s', styles, message);

// -------------------  dev widget
if (GLOBAL_VARS.projectDevStatus) {
	// pageWidgetInit();
	console.log(process.env.NODE_ENV);
}
// -------------------  dev widget###

// -------------------  global variables

const readyFunc = () => {
	console.log('ready');
};

const loadFunc = () => {
	console.log('page load');
	// init componets
	let header = new Header('.header');
	let headerAnimation = new HeaderAnimation.ScrollFunc('.header');
	let animations = new Animations('.base');
	let tooltips = new Tooltips('.main_hero');
	let houseSlider = new Sliders.HouseSlider('.house_item__gallery');
	let planSlider = new Sliders.PlanSlider('.house_item__plan');
	let otherHouseSlider = new Sliders.OtherHouseSlider('.other_house__gallery .swiper-container');
};

documentReady(() => {
	readyFunc();
});

pageLoad(() => {
	loadFunc();
});
