<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Retrieve and sanitize form data
  $name = htmlspecialchars(trim($_POST["name"]));
  $email = htmlspecialchars(trim($_POST["email"]));
  $phone = htmlspecialchars(trim($_POST["phone"]));
  $message = htmlspecialchars(trim($_POST["message"]));

  // Your email address to receive the form submissions
  $to = "conboslice101@gmail.com"; // <-- Replace with your email address

  // Email subject
  $subject = "New Contact Form Submission";

  // Construct the email content
  $email_content = "Name: $name\n";
  $email_content .= "Email: $email\n";
  $email_content .= "Phone: $phone\n";
  $email_content .= "Message:\n$message\n";

  // Email headers
  $headers = "From: $name <$email>";

  // Attempt to send the email
  if (mail($to, $subject, $email_content, $headers)) {
    // On success, redirect to a thank-you page
    header("Location: thank-you.html");
    exit;
  } else {
    // Display an error message if the email fails to send
    echo "There was a problem sending your message. Please try again.";
  }
} else {
  // If the form was not submitted via POST, redirect back to the contact form
  header("Location: contact.html");
  exit;
}
?>
