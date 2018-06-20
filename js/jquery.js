$(document).ready(function(){
    txt_11 = document.getElementById('bb-11');
    txt_12 = document.getElementById('bb-12');
    txt_21 = document.getElementById('bb-21');
    txt_22 = document.getElementById('bb-22');
    txt_31 = document.getElementById('bb-31');
    txt_32 = document.getElementById('bb-32');
    txt_41 = document.getElementById('bb-41');
    txt_42 = document.getElementById('bb-42');


    $('#bb-11').click(function(){
        $("#bt-1").slideDown();
        $("#bt-2").slideUp();
        $("#bt-3").slideUp();
        $("#bt-4").slideUp();
        txt_11.style.display = "none";
        txt_12.style.display = "block";
        txt_21.style.display = "block";
        txt_22.style.display = "none";
        txt_31.style.display = "block";
        txt_32.style.display = "none";
        txt_41.style.display = "block";
        txt_42.style.display = "none";
        // $(".data-picker-menu").delay(800).load('appoitment.php');
    });

    $('#bb-12').click(function(){
        $("#bt-1").slideUp();
        txt_11.style.display = "block";
        txt_12.style.display = "none";
    });

    $('#bb-21').click(function(){
        $("#bt-2").slideDown();
        $("#bt-1").slideUp();
        $("#bt-3").slideUp();
        $("#bt-4").slideUp();
        txt_21.style.display = "none";
        txt_22.style.display = "block";
        txt_11.style.display = "block";
        txt_12.style.display = "none";
        txt_31.style.display = "block";
        txt_32.style.display = "none";
        txt_41.style.display = "block";
        txt_42.style.display = "none";
        // $(".data-picker-menu").delay(800).load('appoitment.php');
    });

    $('#bb-22').click(function(){
        $("#bt-2").slideUp();
        txt_21.style.display = "block";
        txt_22.style.display = "none";
    });

    $('#bb-31').click(function(){
        $("#bt-3").slideDown();
        $("#bt-2").slideUp();
        $("#bt-1").slideUp();
        $("#bt-4").slideUp();
        txt_31.style.display = "none";
        txt_32.style.display = "block";
        txt_21.style.display = "block";
        txt_22.style.display = "none";
        txt_11.style.display = "block";
        txt_12.style.display = "none";
        txt_41.style.display = "block";
        txt_42.style.display = "none";
        // $(".data-picker-menu").delay(800).load('appoitment.php');
    });

    $('#bb-32').click(function(){
        $("#bt-3").slideUp();
        txt_31.style.display = "block";
        txt_32.style.display = "none";
    });

    $('#bb-41').click(function(){
        $("#bt-4").slideDown();
        $("#bt-2").slideUp();
        $("#bt-3").slideUp();
        $("#bt-1").slideUp();
        txt_41.style.display = "none";
        txt_42.style.display = "block";
        txt_21.style.display = "block";
        txt_22.style.display = "none";
        txt_31.style.display = "block";
        txt_32.style.display = "none";
        txt_11.style.display = "block";
        txt_12.style.display = "none";
        // $(".data-picker-menu").delay(800).load('appoitment.php');
    });

    $('#bb-42').click(function(){
        $("#bt-4").slideUp();
        txt_41.style.display = "block";
        txt_42.style.display = "none";
    });
});
