/**
 * Created by joseph on 14/04/17.
 */
(() => {
	const ulMenu = document.querySelector('header nav ul');
	const header = document.querySelector('header');
	const logo = document.querySelector('header figure');
	const navMenu = document.querySelector('header nav')
	//-----Menu Sticky---->
	/*window.addEventListener('scroll', ()=>{
		if(window.scrollY >= ulMenu.offsetTop){
			logo.style.display = 'none';
			header.classList.add('menu-sticky');
		}else{
			logo.style.display = 'block';
			header.classList.remove('menu-sticky');
		}
	});*/


	//-----Mobile Menu---->
	function menuMobileHandler(flag) {
		if (flag) {
			navMenu.style.left = "0%";
		} else {
			navMenu.style.left = "-100%";
		}
	}
	const divBurger = document.querySelector('.mobile-bar');

	let flagMobileMenu = false;
	divBurger.addEventListener('click', () => {
		if (!flagMobileMenu) {
			menuMobileHandler(true);
			flagMobileMenu = true
		} else {
			menuMobileHandler(false);
			flagMobileMenu = false;
		}
	});


	//-----Scroll Map---->
	const mapContainer = document.querySelector('.contact-us .map-container');
	const map = document.querySelector('.contact-us iframe');
	if (mapContainer != null && map != null) {
		mapContainer.addEventListener('click', () => {
			map.style.pointerEvents = 'auto';
		});
		mapContainer.addEventListener('mouseleave', () => {
			map.style.pointerEvents = 'none';
		});
	}



	//--Float Button-->
	const floatButton = document.querySelector('#floatButton');
	let flagFloat = false;
	document.onscroll = () => {
		if (window.scrollY > 107) {
			if (!flagFloat) {
				floatButton.style.display = 'block';
				flagFloat = true;
			}
		} else {
			if (flagFloat) {
				floatButton.style.display = 'none';
				flagFloat = false;
			}
		}

		//console.log(floatButton);
	}



	// Tabs-->	
	let tabs = Array.prototype.slice.apply(document.querySelectorAll('.tabs1'));
	let panels = Array.prototype.slice.apply(document.querySelectorAll('.panels1'));
	if (tabs.length != 0 && panels.length != 0) {
		document.querySelector('#tabs').addEventListener('click', e => {
			if (e.target.classList.contains('tabs1')) {
				let i = tabs.indexOf(e.target);
				tabs.map(tab => {
					tab.classList.remove('tab-active');
				});
				panels.map(panel => {
					panel.classList.remove('tab-active');
				})
				tabs[i].classList.add('tab-active');
				panels[i].classList.add('tab-active');
			}
		});
	}

	let tabs2 = Array.prototype.slice.apply(document.querySelectorAll('.tabs__item2'));
	let panels2 = Array.prototype.slice.apply(document.querySelectorAll('.panels__item2'));
	if (tabs2.length != 0 && panels2.length != 0) {
		document.querySelector('#tabs2').addEventListener('click', e => {
			if (e.target.classList.contains('tabs__item2')) {
				let i = tabs2.indexOf(e.target);
				tabs2.map(tab2 => {
					tab2.classList.remove('tab-active');
				});
				panels2.map(panel2 => {
					panel2.classList.remove('tab-active');
				})
				tabs2[i].classList.add('tab-active');
				panels2[i].classList.add('tab-active');
			}
		});
	}


	const mapContainerContact = document.querySelector('.contact-us-contact .map-container');
	const mapContact = document.querySelector('.contact-us-contact iframe');
	if (mapContainerContact != null && mapContact != null) {
		mapContainerContact.addEventListener('click', () => {
			mapContact.style.pointerEvents = 'auto';
		});
		mapContainerContact.addEventListener('mouseleave', () => {
			mapContact.style.pointerEvents = 'none';
		});
	}


	//Navegación tabs
	let dest = location.hash.slice(1);
	if (dest) {
		let tab = document.getElementById(dest);
		if (tab) {
			tab.click();
			if (dest == 'mango' || dest == 'palta') {
				window.location.hash = '#productos-frescos';
			} else {
				window.location.hash = '#';
			}
		}
	}

})();