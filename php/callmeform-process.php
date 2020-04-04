<?php
$errorMSG = "";

if (empty($_POST["name"])) {
    $errorMSG = "Name is required ";
} else {
    $name = $_POST["name"];
}


if (empty($_POST["email"])) {
    $errorMSG = "Email is required ";
} else {
    $email = $_POST["email"];
}

if (empty($_POST["select"])) {
    $errorMSG = "Select is required ";
} else {
    $select = $_POST["select"];
}
if (empty($_POST["select2"])) {
    $errorMSG = "Select2 is required ";
} else {
    $select2 = $_POST["select2"];
}

if (empty($_POST["message"])) {
    $errorMSG = "Message is required ";
} else {
    $message = $_POST["message"];
}

$EmailTo = "yourname@domain.com";
$Subject = "New quote request from Sprim page";

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $name;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
$Body .= "Service: ";
$Body .= $select;
$Body .= "\n";
$Body .= "Budget: ";
$Body .= $select2;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $message;
$Body .= "\n";

// send email
$success = mail($EmailTo, $Subject, $Body, "From:".$email);
// redirect to success page
if ($success && $errorMSG == ""){
   echo "success";
}else{
    if($errorMSG == ""){
        echo "Something went wrong :(";
    } else {
        echo $errorMSG;
    }
}
?>