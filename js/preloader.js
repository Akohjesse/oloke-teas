setTimeout(animateStart, 4000);

function animateStart(){
    let slider;
    slider = document.querySelector(".first-slide");
    move(slider);
    let slider2;
    slider2= document.querySelector(".second");
    move(slider2);
    let slider3;
    slider3= document.querySelector(".third");
    move(slider3);
    var slider4 = document.querySelector(".fourth");
    shift(slider4);
    var slider5= document.querySelector(".fifth");
    move(slider5);
    
}

function move(val){
    val.classList.add("animate__animated", "animate__slideOutRight");
}

function shift(val){
    val.classList.add("animate__animated", "animate__slideOutLeft");
}
