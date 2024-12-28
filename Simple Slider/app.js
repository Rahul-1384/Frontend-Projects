const slides = document.querySelectorAll(".slide");
var counter = 0;

slides.forEach((image,index) => {
    image.style.left = `${index * 100}%`
});


const goPrev = () => {
    if(counter > 0){
        counter--;
        slideImage();
    }else{
        counter = slides.length - 1;
        slideImage();
    }
}

const goNext = () => {
    if(counter < slides.length - 1){
        counter++;
        slideImage();
    }else{
        counter = 0;
        slideImage();
    }
}


const slideImage = () => {
    slides.forEach((image) => {
    image.style.transform = `translateX(-${counter * 100}%)`
});}
