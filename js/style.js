// script.js
document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Simulate sending the message (you can replace this with actual code to send emails)
        console.log("Sending message...");
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Message:", message);

        // Clear form fields after submission
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";

        alert("Message sent successfully!");
    });
});
