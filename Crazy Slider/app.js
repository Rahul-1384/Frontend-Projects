const slides = document.querySelectorAll(".slide");
console.log(slides)
var counter = 0;

slides.forEach((image,index) => {
    image.style.left = `${index * 100}%`
});

const goPrev = () => {
    if(counter > 0){
        counter--;
        imageSlider();
    }else{
        counter = slides.length - 1;
        imageSlider();
    }
}


const goNext = () => {
    if(counter < slides.length - 1){
        counter++;
        imageSlider();
    }else{
        counter = 0;
        imageSlider();
    }
}


const imageSlider = () => {
    slides.forEach((image,index) => {
        console.log(index)
        image.style.transform = `translateX(-${counter * 100}%)`
    });
}