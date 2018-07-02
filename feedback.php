<meta charset="UTF-8">

<?
$name=$_POST['name'];
$number=$_POST['number'];
$email=$_POST['email'];
$comment=$_POST['comment'];
$send_count=$_POST['send_count']; //Повесить сессию, чтобы учитывать количсество отправок конкретного юзера
$our_mail="shmelevivan20@gmail.com";

mail($our_mail, 'Обратная связь сайта youtale.ru', $name.' - '.$number.' '.$email.' '.$comment);
$name="";
$number="";
$email="";
$comment="";



?>