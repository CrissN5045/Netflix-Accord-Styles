// import {mdInner} from './modules/mdInner';
import accordion from './modules/accordion' 
import {tnsCarousell} from "./modules/tns-slider";

(()=>{
	
	if (document.body.classList.contains('home')) {
		tnsCarousell();
		accordion();
		// functions here
	}else if (document.body.classList.contains('portfolio')) {
		// functions here
		searchFilter();
	}
})();



