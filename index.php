<?
$mail_to_send_to = "mail@gjones.design";
$from_email = "inquiry@gjones.design";   
$name=$_REQUEST['name'];

$subject= $_REQUEST['$subject'];
$email = $_REQUEST['email'] ;
$message= "\r\n" . "Name: $name" . "\r\n" ."Email: $email" . "\r\n"; //get recipient name in contact form
$message = $message.$_REQUEST['message'] . "\r\n" ;//add message from the contact form to existing message(name of the client)
$headers = "From: $from_email" . "\r\n" . "Reply-To: $email"  ;
$a = mail($mail_to_send_to, $subject, $message, $headers);
if ($a)
{
    print("Message received! I apologize for this rudimentary confirmation page while I work on a more appealing message. Speak to you soon!");
} else {
	print("There has been an error sending your message, please make sure your email is valid. I apologize for this rudimentary page while I work on a more appealing message.");
}
		