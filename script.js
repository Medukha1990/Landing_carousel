
document.addEventListener('DOMContentLoaded', function(evt) {
    var subMenu = document.querySelector('.sub-menu-list');
    var openMenu = document.querySelector('.sub-menu');
    
    openMenu.addEventListener('click', function(evt) {
        evt.preventDefault();
        subMenu.classList.add('sub-menu--show');
        openMenu.classList.add('li-add');
    });

    document.addEventListener('keydown', function (evt) {
        if (evt.keyCode === 27) {
            subMenu.classList.remove('sub-menu--show');
            openMenu.classList.remove('li-add');
        };
    });

    var body = document.getElementsByTagName('body')[0];
    var openMainMenu = document.querySelector('.burger-menu');
    
    openMainMenu.addEventListener('click', function() {
        body.classList.add('main-menu--show')
    });


    // slider

    $(".slider").slick({
        dots:true,
        centerMode: true,
        autoplay:false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
          ]
      });

});

// slider-content

$(".slider-content").slick({
    dots:true,
    centerMode: true,
    autoplay:false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
      ]
  });



  