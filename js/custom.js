
document.querySelector('.menu_btn .bars i').addEventListener('click', ()=>{
	document.querySelector('.menu_box').style = 'display:block;';
})

this.addEventListener('click', (e)=> {
	 if(e.target.classList.contains('menu_box')){
		document.querySelector('.menu_box').style = 'display:none ';
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

const LandingPageText = {
	Header: {
		head: ['Olókè','Locally made'],
		Under: ['Premium Teas' ,'To serve you']
	},
	TextUnder: ['Olókè Tea is not only concerned about business success but ethics and sustainability. That is why all products are locally sourced, cruelty free and tested to ensure that only the best is served to the millions who choose the brand daily.', 'Nigerian tea company, founded by Tejúmólá Abiólá-Olókè, a tea enthusiast. Since the year 2000, she and her team of tea lovers have experimented with several teas from across the globe and have discovered the farm fresh taste of premium tea sourced from the highest Plateaus in Nigeria. ']
}


animateLanding();

function animateLanding(){
	var hh = LandingPageText.Header.head;
	var hu = LandingPageText.Header.Under;
	var t = LandingPageText.TextUnder;
	var hhitem = document.querySelector('.text-bg span');
	var huitem = document.querySelector('.text-bg h1');
	var titem = document.querySelector('.text-bg p')
	var x = 0;
	var l = 1;
	setInterval(()=>{
		 hhitem.innerHTML = hh[x];
		 huitem.innerHTML = hu[x];
		 titem.innerHTML = t[l];
		 l--;
		x++;
		if (x >= LandingPageText.Header.head.length){
			x= 0;
		}
		if(l < 0){
			l=1;
		}
	   
	 }, 5000)
}
