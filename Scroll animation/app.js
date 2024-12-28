
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }else{
            entry.target.classList.remove('show');
        }
    });
});

const header = document.querySelectorAll(".header");
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => {
    observer.observe(el)
});
header.forEach((el) => {
    observer.observe(el)
});