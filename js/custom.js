document.querySelector('.menu_btn .bars i').addEventListener('click', ()=>{
	document.querySelector('.menu_box').style = 'display:block;';
})

this.addEventListener('click', (e)=> {
	
	if(e.target.classList.contains('menu_btn')){
		console.log('peter')
	}
})


const swiper = new Swiper('.swiper-container', {
  speed: 400,
  spaceBetween:50,
  autoplay: {
	delay: 2500,
	disableOnInteraction: false,
	},
});