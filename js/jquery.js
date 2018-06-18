$(document).ready(function(){
    txt_1 = document.getElementById('bb-1');
    txt_2 = document.getElementById('bb-2');


    $('#bb-1').click(function(){
        $("#bt-1").slideDown();
        txt_1.style.display = "none";
        txt_2.style.display = "block";
        // $(".data-picker-menu").delay(800).load('appoitment.php');
    });

    $('#bb-2').click(function(){
        $("#bt-1").slideUp();
        txt_1.style.display = "block";
        txt_2.style.display = "none";
    });
});
