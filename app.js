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



/*var navActive = document.querySelectorAll('.nav_link');
for (let navA of navActive) {
    navA.addEventListener("click", function(event) {
        event.preventDefault();
        navA.classList.remove('active');
    });   
} */ 

   /* $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        var $this = $(this),
        blockId = $this.data('scroll'),
        blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });*/
}