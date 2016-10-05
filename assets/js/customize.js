/*-----------------------------------------------------------------------------------
/* Customize JS
-----------------------------------------------------------------------------------*/
$(document).ready(function() {

    pic = new Image();
    pic2 = new Image();
    pic.src = "../images/banner1.jpg";
    pic2.src = "../images/banner2.jpg";

    //fullpage js
    $('#fullpage').fullpage({
        sectionsColor: ['#333', '#666', '#999'],
        navigation: true,
        verticalCentered: false,
        css3: false,
        touchSensitivity: 1,
        scrollingSpeed: 500,
        scrollOverflow: true,
        scrollOverflowOptions: {
            click: true
        },
        afterLoad: function(anchorLink, index) {

            $(".iScrollIndicator").css({
                "display": "none"
            });

            //section 2
            if (index == 1) {
                $('#section1').find('h1').delay(800).css({
                    opacity: 1,
                    transition: '1.0s'
                });
                $('#section2').find('h1').delay(800).css({
                    opacity: 0,
                });
            }

            //section 2
            if (index == 2) {

                $('#section2').find('h1').delay(800).css({
                    opacity: 1,
                    transition: '1.0s'
                });
                $('header').css({
                    backgroundColor: 'rgba(0,0,0,0)',
                    transition: '1.0s'
                });
                $('#section1').find('h1').delay(800).css({
                    opacity: 0,
                });
            }

            //section 3
            if (index == 3) {
                $('header').css({
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    transition: '1.0s'
                });
                $('#section1').find('h1').delay(800).css({
                    opacity: 0,
                });
                $('#section2').find('h1').delay(800).css({
                    opacity: 0,
                });
            }
        }

    });


});
