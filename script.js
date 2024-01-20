

function loader() {
    var tl = gsap.timeline()

    tl.from("#loader h3", {
        x: 200,
        opacity: 0,
        duration: 1,
        stagger: 0.3
    })

    tl.to("#loader h3", {
        opacity: 0,
        x: -30,
        duration: 1,
        stagger: 0.1
    })

    tl.to("#loader", {
        opacity: 0
    })

    tl.from("#page1-content h1 span", {
        y: 100,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        delay: -0.5
    })

    tl.to("#loader", {
        display: "none"
    })

}

loader();

function menuFun(){
    var menuOpen = document.querySelector("#menu-open");
    var menuClose = document.querySelector("#menu-close");
    var menu = document.querySelector("nav");

    menuOpen.addEventListener("click", () => {
        menuOpen.style.display = "none";
        menuClose.style.display = "block";
        menu.style.right = "0";
    })
    menuClose.addEventListener("click", () => {
        menuOpen.style.display = "block";
        menuClose.style.display = "none";
        menu.style.right = "-100%";
    })
}

menuFun();

function skillScroll(){
    var swiper = new Swiper(".mySwiper", {
        effect: "cube",
        grabCursor: true,
        loop : "true",
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
        cubeEffect: {
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
        pagination: {
          el: ".swiper-pagination",
        },
    });
}

skillScroll();
