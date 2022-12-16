// SIDE BAR //
const menuItems = document.querySelectorAll('menu-item');



//-----------MESSAGES------------//
const messagesNotification = document.querySelector
('#messages-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');


//THEME 
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
cons fontSizes = document.querySelector('.choose-size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorAll('.choose-color span');
const Bg1 = document.querySelector('bg-1');
const Bg2 = document.querySelector('bg-2');
const Bg3 = document.querySelector('bg-3');




//SIDE BAR//

// remove active class from all menuitems//
const changeActiveItem =() =>{
	menuItems.forEach(item => {
		item.classList.remove('active')
	})
}



menuItems.forEach(item => {
	item.addEventListener('click', ()=>{
		changeActiveItem();
		item.classList.add('active');
		if(item.id !m 'notifications'){
			document.querySelector('.notifications-popup').
			style.display = 'none';
		}else {
			document.querySelector('.notifications-popup').
			style.display = 'block';
		}
	})
})


//-------------MESSAGES-----------//
//Searches chat
const searchMessage = () => {
	const val = messageSearch.value.tolowerCase();
	messsage.forEach(chat =>{
		let name = chat.querySelectorAll('h5').textContent.tolowerCase();
		if (name.indexOf(val) != -1) {
			chat.style.display = 'flex';
		}else{
			chat.style.display = 'none';
		}
	})
}


//Search chat
messageSearch.addEventListener('keyup', searchMessage);


// Highlight messages card when message menu item is clicked//
messagesNotification.addEventListener('click', () => {
	messsages.style.boxshadow = '0 0 1rem var(--color-primary)';
	setTimeout(() => {
		messsages.style.boxshadow = 'none';
	}, 2000;
})


// THEME  DISPLAY CUSTOMIZATION

//opens modal
	const openThemeModal = () => {
		themeModal.style.display = 'grid';
	}
	//Close Modal

	const closeThemeModal = (e) => {
		if (e.target.classList.contains('customize-theme')) {
			themeModal.style.display = 'none';
		}
	}
	//close modal
	themeModal.addEventListener('click', closeThemeModal);


	theme.addEventListener('click', openThemeModal);





	//-------------------------FONTS------------------//

		//remove active class from spans orfont size selectors
	const removeSizeSelector = () => {
		fontSize.forEach(size => {
			size.classList.remove('active');
		})
	}

	fontSizes.forEach(size => {
		size.addEventListener('click', () => {
			removeSizeSelector();
		let fontSizes;
		size.classList.toggle('active');
			if (size.classList.contains('font-size-1')) {
			fontSize = '10px';
			root.style.setProperty('---sticky-top-left', '5.4rem');
			root.style.setProperty('---sticky-top-right', '5.4rem');
		} else if (size.classList.contains('font-size-2')) {
			fontSize = '13px';
			root.style.setProperty('---sticky-top-left', '5.4rem');
			root.style.setProperty('---sticky-top-right', '-7rem');
		}else if(size.classList.contains('font-size-3')) {
			fontSize = '16px';
			root.style.setProperty('---sticky-top-left', '-2rem');
			root.style.setProperty('---sticky-top-right', '-17rem');
		} else if(size.classList.contains('font-size-4')) {
			fontSize = '19px';
			root.style.setProperty('---sticky-top-left', '-5rem');
			root.style.setProperty('---sticky-top-right', '-25rem');
		}else if(size.classList.contains('font-size-5')) {
			fontSize = '22px';
			root.style.setProperty('---sticky-top-left', '-12rem');
			root.style.setProperty('---sticky-top-right', '-35rem');
		}
		// change font size of the root html element
		document.querySelector('html').style.fontSize = fontSize;

	})
	})


	//-------------remove active class from colors
	const changeActiveColorClass = () => {
		colorPalette.forEach(colorPicker => {
			colorPicker.ClassList.remove('active');
		})
	}



	//Change Primary Colors--------------------------//
		colorPalette.forEach(color => {
			color.addEventListener('click', () => {
				let primary;
				//-----REMOVE ACTIVE CLASS FROM COLORS//
				changeActiveColorClass();

				if(color.ClassList.contains('color-1')){
					primaryHue = 252;

				} else if(color.classList.contains('color-2')){
					primaryHue = 52;
				}
				lse if(color.classList.contains('color-3')){
					primaryHue = 32;
				}
				lse if(color.classList.contains('color-4')){
					primaryHue = 152;
				}
				lse if(color.classList.contains('color-5')){
					primaryHue = 202;
				}
				color.classList.add('active');

				root.style.setProperty('--primary-color-hue', primaryHue);
				
			})
		})


// THEME BACKGROUND VALUES //
let lightColourLightness;
let whiteColourLightness;
let darkColourLightness;


//change background color
const changeBG = () => {
	root.style.setProperty('--light-color-lightness', lightColourLightness);
	root.style.setProperty('--white-color-lightness', whiteColourLightness);
	root.style.setProperty('--dark-color-lightness', darkColourLightness);
}

//change background color

Bg1.addEventListener('click', () =>{
	//add active class
	Bg1.classList.add('active');
	// Remove active class from others
	Bg2.classList.remove('active');
	Bg3.classList.remove('active');
	//remove customized changes from local storege
	window.location.reload();
})

Bg2.addEventListener('click', () =>{
	darkColourLightness = '95%';
	whiteColourLightness = '20%';
	lightColourLightness = '15%';

	//add active class
	Bg2.classList.add('active');
	// Remove active class from others
	Bg1.classList.remove('active');
	Bg3.classList.remove('active');
	changeBG();
})

Bg3.addEventListener('click', () =>{
	darkColourLightness = '95%';
	whiteColourLightness = '10%';
	lightColourLightness = '0%';

	//add active class
	Bg3.classList.add('active');
	// Remove active class from others
	Bg1.classList.remove('active');
	Bg2.classList.remove('active');
	changeBG();
})