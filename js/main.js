//Incorporation of google maps 
function initMap() {
        const pos = {lat: 13.082680, lng: 80.270721};
        const map = new google.maps.Map(document.querySelector('.map'), {
          center: pos,
          zoom: 14
        });
        const marker = new google.maps.Marker({position: pos,
            map: map });
      }


// Navbar Onscroll Effect      
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll >= 65){
            $('#navbar').addClass('navbar-scroll');
        }else if(scroll < 65){
            $('#navbar').removeClass('navbar-scroll');
        }else {
            $('#navbar').css('background', 'transparent');
        }
    });
});


//Smooth Scrolling Effect
$('#navbar a').on('click', function(event){
    if(this.hash !== ''){
        event.preventDefault();
        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 90
            },
            800
        );
    }
});