/*-----------------------------------------------------------------------------------
/* Customize JS
-----------------------------------------------------------------------------------*/
$(document).ready(function() {

    //預先loading大圖
    pic = new Image();
    pic2 = new Image();
    pic.src = "assets/images/banner1.jpg";
    pic2.src = "assets/images/banner2.jpg";




    //判斷如果是ios設備
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
                    $('.banner').css({
                        height: "85vh",
                    });
                    return true;
                }
            }
        }

        return false;
    };
    iOS();

    //fullpage js
    $('#fullpage').fullpage({
        sectionsColor: ['#1006FF', '#F9592C', '#FFFFFF'],
        navigation: true,
        verticalCentered: false,
        css3: true,
        touchSensitivity: 15,
        scrollOverflow: true,
        scrollOverflowOptions: {
            click: true
        },
        afterLoad: function(anchorLink, index) {

            $(".iScrollVerticalScrollbar, .iScrollLoneScrollbar").css({
            "display": "none"
            });



            //section 2
            if (index == 1) {
                $('#section1').find('h1').delay(0).css({
                    opacity: 1,
                    transition: '1.0s'
                });
                $('#section2').find('h1').delay(0).css({
                    opacity: 0,
                    transition: '1.0s'
                });
                $('nav ul li a').removeClass("color-blue").addClass("color-white");
            }

            //section 2
            if (index == 2) {
                $('#section2').find('h1').delay(0).css({
                    opacity: 1,
                    transition: '1.0s'
                });
                $('#section1').find('h1').delay(0).css({
                    opacity: 0,
                    transition: '1.0s'
                });
                $('header').css({
                    backgroundColor: 'rgba(0,0,0,0)',
                    borderBottom: '1px solid rgba(16,6,255,0)',
                    transition: '1.0s'
                });
                $('nav ul li a').removeClass("color-blue").addClass("color-white");
            }

            //section 3
            if (index == 3) {
                $('#section1,#section2').find('h1').delay(0).css({
                    opacity: 0,
                    transition: '1.0s'
                });
                $('header').css({
                    backgroundColor: 'rgba(255,255,255,0.9)',
<<<<<<< HEAD
                    borderBottom: '1px solid rgba(16,6,255,1)',
=======
>>>>>>> e41a49f6ea655770ef101de304c37a60e412a80b
                    transition: '1.0s'
                });
                $('nav ul li a').removeClass("color-white").addClass("color-blue");
            }
        }

    });




});
