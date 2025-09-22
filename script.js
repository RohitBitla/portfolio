console.log("Script loaded and running.");

document.getElementById("contact-form").addEventListener("submit", function(event) {
    console.log("Form submission event triggered.");
    event.preventDefault(); // Stops the page from reloading
    sendMail(); // Call your function
});

function sendMail() {
    console.log("sendMail() function called.");
    let parms = {
        name: document.getElementById("contact-name").value,
        email: document.getElementById("contact-email").value,
        message: document.getElementById("contact-project").value,
    };
    
    // Check if the input values are being captured correctly
    console.log("Captured form data:", parms);

    const serviceID = "service_ybvgyhf";
    const templateID = "template_u27jrtq";

    console.log("Attempting to send email...");
    emailjs.send(serviceID, templateID, parms)
        .then((res) => {
            console.log("Email successfully sent!");
            document.getElementById("contact-form").reset();
            console.log("Form reset successfully.");
            alert("Your message was sent successfully!");
        })
        .catch((err) => {
            console.error("Failed to send email. Error:", err);
            alert("Failed to send email. Please check the console for details.");
        });
}