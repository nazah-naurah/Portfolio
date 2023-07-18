const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent the form from submitting normally

  // Get form inputs
  const fullName = contactForm.querySelector('input[type="text"]').value;
  const emailAddress = contactForm.querySelector('input[type="email"]').value;
  const mobileNumber = contactForm.querySelector('input[type="text"]').value;
  const emailSubject = contactForm.querySelector('input[type="text"]').value;
  const message = contactForm.querySelector('textarea').value;

  // Compose the email body
  const body = `
    Full Name: ${fullName}
    Email Address: ${emailAddress}
    Mobile Number: ${mobileNumber}
    
    Message:
    ${message}
  `;

  // Send email
  const mailToLink = `mailto:nazahnaurahv@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailToLink;

  // Refresh the page after a short delay (adjust the timeout value as needed)
  setTimeout(function () {
    location.reload();
  }, 2000); // Refresh after 2 seconds (2000 milliseconds)
});