$(window).ready(function(){
    console.log("load...");
    send_count=0;
    $('.form').submit(function(event){
        send_count++;
        event.preventDefault();
        if(send_count>2){
            alert("Превышен лимит отправок");
            location.reload();
        }
        else{
            if($('input[name="name"]').val()!=="" && $('input[name="number"]').val()!=="" &&
                $('input[name="email"]').val()!=="" && $('input[name="comment"]').val()!==""){
                $.post('../feedback.php', {'count_send':send_count, 'name':$('input[name="name"]').val(), 'number':$('input[name="number"]').val(), 'email':$('input[name="email"]').val(),
                    'comment':$('input[name="comment"]').val()});
                console.log("send...");
            }
            else{
                alert("Заполните все поля!");
            }
        }
        
    });
});