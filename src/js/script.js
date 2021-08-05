window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu__list'),
    menuItem = document.querySelectorAll('.menu__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu__list_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu__list_active');
        });
    });
});

// плавный скролл
var $page = $('html, body');
$('a[href*="#"]').click(function() {
    const menuList = document.querySelector('.menu__list_active'),
          hamburger = document.querySelector('.hamburger_active');

    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);

    if (menuList) {
        hamburger.classList.toggle('hamburger_active');
        menuList.classList.toggle('menu__list_active');
    }
    return false;
});


$('.modal__close').on('click', function () {
    $('.overlay, #thanks').fadeOut('slow');
    document.body.style.overflow = ''; 
});

//phpmailer
$('form').submit(function(e) {
    e.preventDefault();
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");
        $('.overlay, #thanks').fadeIn('slow');
        document.body.style.overflow = 'hidden'; 
        $('form').trigger('reset');
    });
    return false;
});