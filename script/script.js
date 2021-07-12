const form = document.getElementById("form");
const email = document.getElementById("email");
const notification = document.getElementById("notification");

/*
 * validate an e-mail address by leveraging the HTML5
 * input element with type "email"
 */

form.addEventListener("submit", function (e) {
    e.preventDefault();

    var input = document.createElement("input");
    input.type = "email";
    input.value = email.value;

    if (input.checkValidity() && input.value !== "") {
        notification.textContent = "Thank you for your patronage!";
        email.value = "";
    } else {
        document.getElementById("err-icon").style.display = "block";
        notification.textContent = "Please provide a valid email.";
    }

    return false;
});

email.addEventListener("focus", function () {
    notification.textContent = "";
    document.getElementById("err-icon").style.display = "none";
});
