var document;
var $;

// responsivemenu

function myFunction() {
    "use strict";
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

$(document).ready(function () {
    "use strict";

    // menu bar icons
    $(".fa-bars").click(function () {
        $(".fa-bars").hide();
        $(".fa-times").show();
    });

    // menu times icons
    $(".fa-times").click(function () {
        $(".fa-bars").show();
        $(".fa-times").hide();
    });
});

// flexSlider

$(document).ready(function () {

    "use strict";

    $(".flexslider").flexslider({
        animation: "fade",
        controlsContainer: ".flexslider"
    });
});


// Accordion

var acc = document.getElementsByClassName("accordion");
var i;



for (i = 0; i < acc.length; i += 1) {

    acc[i].addEventListener("click", function () {

        this.classList.toggle("accactive");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

// Back top Top

/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function () {
    $("#back2Top").click(function (event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });
});
