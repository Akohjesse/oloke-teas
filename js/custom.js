document.querySelector('.menu_btn .bars i').addEventListener('click', ()=>{
	document.querySelector('.menu_box').style = 'display:block;';
	var on = true;

	while(on){
		window.document.addEventListener('click', (e)=>{
            if(!e.target.contains('menu_box')){
				document.querySelector('.menu_box').style = 'display:none';
			}
		})
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