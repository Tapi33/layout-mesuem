const progress = document.querySelector('.progress-bar');
const volumeBar = document.querySelector('.volume-bar');
const prev = document.querySelector('.arrow-left');
const next = document.querySelector('.arrow-right');
const slides = document.querySelectorAll('.slider-img');
const dots = document.querySelectorAll('.carousel-item');
const numberSlide = document.querySelector('.numberSlide');

progress.addEventListener('input', function() {
    const value = this.value;
    this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #fff ${value}%, white 100%)`
})
volumeBar.addEventListener('input', function() {
    const value = this.value;
    this.style.background = `linear-gradient(to right, #710707 0%, #710707 ${value}%, #fff ${value}%, white 100%)`
})


let index = 0;

const activeSlide = n => {
    let slide;
    for(slide of slides){
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}
const activeDot = n => {
    let slide;
    let dot;
    for(dot of dots){
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}
const activeNumber = n =>{
    numberSlide.innerHTML = (`0${n+1}`);
}
const prepareCurrentSlide = ind =>{
    activeNumber(ind);
    activeSlide(ind);
    activeDot(ind);
}

const nextSlide = () => {
    if(index === slides.length - 1){
        index = 0;
        prepareCurrentSlide(index);
    } else{
        index++;
        prepareCurrentSlide(index);
    }
}
const prevSlide = () => {
    if(index === 0){
        index = slides.length - 1;
        prepareCurrentSlide(index);
    } else{
        index--;
        prepareCurrentSlide(index);
    }
}

dots.forEach((item,indexDot)=>{
    item.addEventListener('click',()=>{
        index = indexDot
        prepareCurrentSlide(index);
    })

})



next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
next.addEventListener('touchmove', nextSlide);
prev.addEventListener('mousemove', prevSlide);


function beforeAfter() {
    document.getElementById('slider-before').style.width = document.getElementById('changer').value + "%";
}
