window.onload = function() {
    var header = document.querySelector('#header');
    var introH = document.querySelector('#intro').offsetHeight;
    var scrollOffset = window.scrollY;

    checkScroll(scrollOffset);

    window.onscroll = function() {
        scrollOffset = this.scrollY;
        checkScroll(scrollOffset);
    };

    function checkScroll(scrollOffset){
         
        if(scrollOffset >= introH) {
            header.classList.add('fixed'); 
        } else {
            header.classList.remove('fixed');
        }
    }

    /* Burger menu */
    var nav_toggle = document.querySelector('#nav-toggle'),
        nav = document.querySelector('#nav');

    nav_toggle.onclick = function(event) {
        event.preventDefault();
        nav_toggle.classList.toggle('active');
        nav.classList.toggle('active');
    }


/* Smooth scroll */

var anchors = document.querySelectorAll('[data-scroll]');


for (let anchor of anchors) {
    
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        var blockId = this.getAttribute('data-scroll');
        document.querySelector('' + blockId).scrollIntoView({
            behavior: "smooth",
            block: "start"
        }); 
        var actives = document.querySelectorAll('.nav_link');
        for (let active of actives) {
            active.classList.remove('active');
        }
        
        
        this.classList.add('active');
    });
}

/* Slider */

var btnNext = document.querySelector(".reviews_btn--next");
var btnPrev = document.querySelector(".reviews_btn--prev");
var items = document.querySelectorAll(".reviews_item");
var i = 0;

btnNext.onclick = function(event) {
    event.preventDefault();

        items[i].classList.remove("active");
        i++;
        if (i >= items.length) {
            i = 0;
        }
        items[i].classList.add("active");
        
    
}

btnPrev.onclick = function(event) {
    event.preventDefault();
        
        items[i].classList.remove("active");
        i--;
        if (i < 0) {
            i = items.length - 1;
        }
        items[i].classList.add("active");
        
    
}


}