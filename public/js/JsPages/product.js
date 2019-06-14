$(document).ready(function () {


    ///////////////////////////////////////////////////////////////
    // Accordion
    ///////////////////////////////////////////////////////////////

    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("active");

            /* Toggle between hiding and showing the active panel */
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
                panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }



    ///////////////////////////////////////////////////////////////
    // Grid/List
    ///////////////////////////////////////////////////////////////



    $('#list').click((event) => {
        $('.product_list--item').addClass('product_list--list');
    });

    $('#grid').click((event) => {
        $('.product_list--item').removeClass('product_list--list');
    });

    /* Optional: Add active class to the current button (highlight it) */
    var container = document.getElementById("btnContainer");
    var btns = container.getElementsByClassName("custom--btn");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("custom--active");
            current[0].className = current[0].className.replace(" custom--active", "");
            this.className += " custom--active";
        });
    }
});