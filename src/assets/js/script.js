'use strict'

window.onload = function () {
	const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
	if (menuLinks.length > 0) {
		menuLinks.forEach(menuLink => {
			menuLink.addEventListener("click", onMenuLinkClick);
		});
	}

	function onMenuLinkClick(e) {
		const gotoBlock = document.querySelector(e.target.dataset.goto);
		if (gotoBlock) {
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top +
				pageYOffset - document.querySelector('.header').offsetHeight;

			if (iconMenu.classList.contains('_active')) {
				document.body.classList.remove('_lock');
				iconMenu.classList.remove('_active');
				menuBody.classList.remove('_active');
			}
			
			window.scrollTo ({
				top: gotoBlockValue,
				behavior: "smooth"
			});
		}
		e.preventDefault();
	}

	//меню бургер
	const iconMenu = document.querySelector('.menu__icon');
	const menuBody = document.querySelector('.menu__body');	
	if (iconMenu) {

		iconMenu.addEventListener("click", function (e) {
			document.body.classList.toggle('_lock');
			iconMenu.classList.toggle('_active');
			menuBody.classList.toggle('_active');
		})
	}
}

// window.onload = function () {
// 	const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
// 	if (menuLinks.length > 0) {
// 		menuLinks.forEach(menuLink => {
// 			const gotoBlock = document.querySelector(menuLink.dataset.goto);
// 			if (gotoBlock) {
// 				menuLink.addEventListener("click", function(e) {
// 					onMenuLinkClick(gotoBlock);
// 					e.preventDefault();
// 				});
// 			}
// 		});
// 	}

// 	function onMenuLinkClick(gotoBlock) {
// 		const gotoBlockValue = gotoBlock.getBoundingClientRect().top +
// 			pageYOffset - document.querySelector('.header').offsetHeight;

// 		window.scrollTo ({
// 			top: gotoBlockValue,
// 			behavior: "smooth"
// 		});
// 	}
// }