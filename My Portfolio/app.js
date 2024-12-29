document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry);
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            } else {
                entry.target.classList.remove("show");
            }
        });
    });

    const content = document.querySelectorAll(".hero-animation");
    console.log(content);
    content.forEach((el) => {
        observer.observe(el);
    });
});
