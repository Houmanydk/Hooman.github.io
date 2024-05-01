document.addEventListener("DOMContentLoaded", function() {
    const changeContactButton = document.getElementById("changeContact");
    const emailSpan = document.getElementById("email");
    const phoneSpan = document.getElementById("phone");

    const newContactInfo = {
        email: "info@securitytester.com",
        phone: "987-654-3210"
    };

    changeContactButton.addEventListener("click", function() {
        emailSpan.textContent = newContactInfo.email;
        phoneSpan.textContent = newContactInfo.phone;
    });
});
