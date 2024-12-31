document.addEventListener("DOMContentLoaded", () => {
    const hero = new IntersectionObserver((entries) => {
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
        hero.observe(el);
    });




    // Left Effect
    const leftContent = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                entry.target.classList.add("leftEffect");
            }else{
                entry.target.classList.remove("leftEffect")
            }
        })
    });

    const left = document.querySelectorAll(".left")
    left.forEach((el) => {
        leftContent.observe(el)
    });




    // Right Effect
    const rightContent = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                entry.target.classList.add("rightEffect");
            }else{
                entry.target.classList.remove("rightEffect")
            }
        })
    });

    const right = document.querySelectorAll(".right")
    right.forEach((el) => {
        rightContent.observe(el)
    });




    // Heading Effect
    const headingContent = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting){
                entry.target.classList.add("headingEffect");
            }else{
                entry.target.classList.remove("headingEffect")
            }
        })
    });

    const heading = document.querySelectorAll(".aboutme")
    heading.forEach((el) => {
        headingContent.observe(el)
    });





    // Progress Circle
    const progressCircleElements = document.querySelectorAll('.progress');
    progressCircleElements.forEach(progress => {
        const percent = progress.getAttribute('data-percent');
        progress.style.setProperty('--progress', percent);
    });



    // Progress Line
    const progressLineElements = document.querySelectorAll(".progress-bar-half-length");

    progressLineElements.forEach((progress) => {
        const percent = progress.getAttribute('data-percent');
        progress.style.width = `${percent}%`
    })

  


});
