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
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});


$('.modal__close').on('click', function () {
    $('.overlay, #thanks').fadeOut('slow');
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

        $('form').trigger('reset');
    });
    return false;
});
// $(document).ready(function(){
//     $('form').submit(function(e) {
//         e.preventDefault();
//         $.ajax({
//             type: "POST",
//             url: "mailer/smart.php",
//             data: $(this).serialize()
//         }).done(function() {
//             $(this).find("input").val("");
//             $('.overlay, #thanks').fadeIn('slow');

//             $('form').trigger('reset');
//         });
//         return false;
//     });
// });