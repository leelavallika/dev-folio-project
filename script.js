const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    let isValid = true;
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required";
        isValid = false;
    }
    const emailPattern = /.+@.+\..+/;
    if (emailInput.value.trim() === "") {
        emailError.textContent = "Email is required";
        isValid = false;
    } else if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = "Enter a valid email";
        isValid = false;
    }
    if (messageInput.value.trim().length < 10) {
        messageError.textContent =
            "Message must be at least 10 characters";
        isValid = false;
    }
    if (isValid) {
        console.log("Form submitted successfully!");
    }

});