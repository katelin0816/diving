/*-----------------------------------------------------------------------------------
/* Customize JS
-----------------------------------------------------------------------------------*/
$(document).ready(function() {

    pic = new Image();
    pic2 = new Image();
    pic.src = "assets/images/banner1.jpg";
    pic2.src = "assets/images/banner2.jpg";


    function iOS() {

        var iDevices = [
            'iPad Simulator',
            'iPhone Simulator',
            'iPod Simulator',
            'iPad',
            'iPhone',
            'iPod'
        ];

        if (!!navigator.platform) {
            while (iDevices.length) {
                if (navigator.platform === iDevices.pop()) {
                    $('.intro').css({
                        height: "100vh",
                    });
                    return true;
                }
            }
        }

        return false;
    }

    //fullpage js
    $('#fullpage').fullpage({
        sectionsColor: ['#333', '#666', '#999'],
        navigation: true,
        verticalCentered: false,
        css3: false,
        touchSensitivity: 5,
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
                $('#section3').find('h1').delay(800).css({
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
                $('#section3').find('h1').delay(800).css({
                    opacity: 1,
                });
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
