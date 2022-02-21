$(document).ready(function (){
    $('#btn_width').on('click', function (){
        $('.example').animate({'width': '200px'},1000);
    })

    $('#btn_opacity').on('click', function (){
        $('.example').animate({'opacity': 0},1000);
    })

    $('#btn_hide').on('click', function (){
        $('.example').hide('slow');
    })

    $('#btn_show').on('click', function (){
        $('.example').show('slow');
    })

    $('#btn_toggle_show').on('click', function (){
        $('.example').hide(1000).delay(1000).show(1000);
    })

    $('#btn_fade').on('click', function (){
        $('.example').fadeOut();
    })

    $('#btn_fade_show').on('click', function (){
        $('.example').fadeIn();
    })

    $('#btn_fade_plus').on('click', function (){
        $('.example').fadeToggle('slow');
    })

    $('#btn_slide-fade').on('click', function (){
        $('.example').slideUp('slow');
    })

    $('#btn_slide-show').on('click', function (){
        $('.example').slideDown('slow');
    })

    $('#btn_slide-fade-plus').on('click', function (){
        $('.example').slideToggle('slow');
    })












})