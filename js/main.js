$(document).ready(function() {
    new WOW().init();
    $("#vehicles__list").mCustomScrollbar({
        theme: "dark",
    });

    function move(value) {
        // Khi click chạy xuống id = value
        $("#vehicles__list").mCustomScrollbar("scrollTo", value, {
            scrollEasing: 'easeOut',
        });
    }
    $(".vehicles__nav ul li a").click(function() {
        switch ($(this).attr("id")) {
            case "cars-nav":
                move("#cars");
                break;
            case "suvs-nav":
                move("#suvs");
                break;
            case "minivan-nav":
                move("#minivan");
                break;
            case "environmental-nav":
                move("#environmental");
                break;
            default:
                move("#future");
                break;
        }
    });
    $('.vehicles__nav').on('click', 'li', function() {
        $('.vehicles__nav li.active').removeClass('active');
        $(this).addClass('active');
    });

    var count = "";
    $("#navbar> a").click(function() {
        if (count === "") {
            count = $(this).attr("id");
            $(this).addClass('active');
            if (count === "vehicles__link") {
                $("#vehicles").removeClass("hide-vehicles");
                $(".vehicles__nav").addClass("animate__fadeInDown");
                $("#vehicles__list").addClass('animate__fadeInUp');
                $("#vehicles__close").addClass("animate__fadeIn");
            }
        } else {
            if (count === $(this).attr("id")) {
                $(this).removeClass('active');
                count = "";
                $(".vehicles__nav").addClass("animate__fadeOutUp");
                $("#vehicles__list").addClass('animate__fadeOutDown');
                $("#vehicles__close").addClass("animate__fadeOut");
                setTimeout(function() {
                    $("#vehicles").addClass('hide-vehicles');
                    $(".vehicles__nav").removeClass('animate__fadeOutUp');
                    $("#vehicles__list").removeClass('animate__fadeOutDown');
                    $("#vehicles__close").removeClass("animate__fadeOut");
                }, 300);
            } else {
                $("#navbar > a").removeClass('active');
                $(this).addClass('active');
                count = $(this).attr("id");
                if (count !== "vehicles__link") {
                    $(".vehicles__nav").addClass("animate__fadeOutUp");
                    $("#vehicles__list").addClass('animate__fadeOutDown');
                    $("#vehicles__close").addClass("animate__fadeOut");
                    setTimeout(function() {
                        $("#vehicles").addClass('hide-vehicles');
                        $(".vehicles__nav").removeClass('animate__fadeOutUp');
                        $("#vehicles__list").removeClass('animate__fadeOutDown');
                        $("#vehicles__close").removeClass("animate__fadeOut");
                    }, 300);
                } else {
                    $("#vehicles").removeClass("hide-vehicles");
                    $(".vehicles__nav").addClass("animate__fadeInDown");
                    $("#vehicles__list").addClass('animate__fadeInDown');
                }
            }
        }
    });
    $("#vehicles__close").click(function() {
        $("#vehicles__close").addClass("animate__fadeOut");
        $(".vehicles__nav").addClass("animate__fadeOutUp");
        $("#vehicles__list").addClass('animate__fadeOutDown');
        setTimeout(function() {
            $("#vehicles").addClass('hide-vehicles');
            $(".vehicles__nav").removeClass('animate__fadeOutUp');
            $("#vehicles__list").removeClass('animate__fadeOutDown');
            $("#vehicles__close").removeClass("animate__fadeOut");
        }, 300);
        $("#navbar > a").removeClass('active');
        count = "";
    });
    $(".vehicles__product").addClass('animate__animated animate__fadeInUp');
    const swiper = new Swiper('.swiper', {
        centeredSlides: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    $(".carousel-indicators-config li").click(function() {
        $(".carousel-indicators-config li").removeClass("active");
        $(this).addClass("active");
    });
    $(".indicators-xs-header").click(function() {
        $(".carousel-indicators-xs ol").slideToggle();
        if ($(".indicators-xs-header i").hasClass("transform-rotate")) {
            $(".indicators-xs-header i").removeClass("transform-rotate");
        } else {
            $(".indicators-xs-header i").addClass("transform-rotate");
        }
    });
    $(".carousel-indicators-xs ol li").click(function() {
        $(".indicators-title span").html($(this).html());
        $(".carousel-indicators-xs ol").slideUp();
        $(".indicators-xs-header i").addClass("transform-rotate");
    });
    var count = 0;
    $(".carousel-control-prev").click(function() {
        $(".carousel-indicators-config li").removeClass("active");
        if (count == 0) {
            count = 4;
        } else {
            count--;
        }
        $(".carousel-indicators-config li").each(function(i) {
            if (i == count) {
                $(this).addClass("active");
                $(".indicators-title span").html($(this).html());
            }
        });
    });
    $(".carousel-control-next").click(function() {
        $(".carousel-indicators-config li").removeClass("active");
        if (count == 4) {
            count = 0;
        } else {
            count++;
        }
        $(".carousel-indicators-config li").each(function(i) {
            if (i == count) {
                $(this).addClass("active");
                $(".indicators-title span").html($(this).html());
            }
        });
    });
    $(".backToTop").click(function() {
        $("body, html").animate({
            scrollTop: 0
        }, 1000);
    });

    function collapse() {
        var width = $(window).width();
        if (width >= 750) {
            $(".collapse-ul").removeClass("collapse");
        } else {
            $(".collapse-ul").addClass("collapse");
        }
    }
    $(window).resize(function() {
        collapse();
    });
    collapse();
});