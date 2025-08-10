const leftContent = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                entry.target.classList.add("leftEffect");
            }else{
                entry.target.classList.remove("leftEffect")
            }
        })
    });

    const left = document.querySelectorAll(".left-hero")
    left.forEach((el) => {
        leftContent.observe(el)
});

const images = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("image-animate")
        }else{
            entry.target.classList.remove("image-animate")
        }
    })
})
document.querySelectorAll(".right-hero").forEach((el) => {
    images.observe(el)
})


// Slider
const img = document.querySelector(".img-slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let imagesArray = ['photo1.jpg', 'photo2.jpg'];
let currentIdx = 0;

function nextSlide(){
    currentIdx++;
    if(currentIdx >= imagesArray.length){
        currentIdx = 0;
    }
    showImage(currentIdx);
}
function prevSlide(){
    currentIdx--;
    if(currentIdx < 0){
        currentIdx = imagesArray.length - 1;
    }
    showImage(currentIdx);
}
function showImage(idx){
    img.style.opacity = 0;
    setTimeout(() => {
        img.src = imagesArray[idx];
        img.style.opacity = 1;
    }, 300)
}
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);
