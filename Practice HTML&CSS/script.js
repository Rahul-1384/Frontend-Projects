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