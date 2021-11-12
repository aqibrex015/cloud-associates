$(document).ready(function () {
    //  sidebar
    $('#nav-icon4').click(function () {
        $(this).toggleClass('open');
        $('.navbar-nav').toggleClass('active');
        $('.overlay').toggleClass('active');

    })

    $('.overlay').click(function () {
        $('.navbar-nav').toggleClass('active');
        $('.overlay').removeClass('active');
        $('#nav-icon4').removeClass('open');

    })

    $('.close-nav').click(function () {
        $('.navbar-nav').removeClass('active');
        $('.overlay').removeClass('active');
    })

    $('.nav-link').click(function () {
        $('.navbar-nav').removeClass('active');
        $('.overlay').removeClass('active');
        $('#nav-icon4').removeClass('open');

    })


    window.addEventListener('scroll', (e) => {
        const nav = document.querySelector('.nav');
        if (window.pageYOffset > 200) {
            $('header').addClass('mt-0')
        } else {
            $('header').removeClass('mt-0')
        }
    });



    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });



    // aos
    AOS.init({
        once: true
    });


    jQuery("#testimonials").owlCarousel({
        items: 1,
        margin: 50,
        autoplay: true,
        autoplaySpeed: 2000,
        autoplayHoverPause: true,
        loop: true,
        center: true,
        dots: true,
        smartSpeed: 450,
        navigation: true,
        navigationText: ["", ""],

        singleItem: true,
        // animateIn: 'fadeIn',
        // animateOut: 'fadeOut'
    });

});