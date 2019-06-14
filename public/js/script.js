$(document).ready(function () {
    $('.product--carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            750:{
                items:2,
                nav:false
            },
            1000:{
                items:6,
                nav:true,
                loop:false
            }
        }
    })

    $('.social--carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                nav:true
            },
            750:{
                items:4,
                nav:false
            },
            1000:{
                items:6,
                nav:true,
                loop:false
            }
        }
    })


    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks the button, open the modal
    setTimeout(()=>{
        modal.style.display = "block";
    }, 2000);

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});