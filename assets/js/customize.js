/*-----------------------------------------------------------------------------------
/* Customize JS
-----------------------------------------------------------------------------------*/
$(document).ready(function() {


    //fullpage js
    $('#fullpage').fullpage({
        sectionsColor: ['#333', '#666', '#999'],
        navigation: true,
        verticalCentered: false,
        css3: false,
        touchSensitivity: 5,
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
            }

            //section 3
            if (index == 3) {
                $('header').css({
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    transition: '1.0s'
                });
            }
        }

    });


});
