const form = document.getElementById("form");
const email = document.getElementById("email");
const err = document.getElementById("err");
const yes = document.getElementById("yes");

/*
 * validate an e-mail address by leveraging the HTML5
 * input element with type "email"
 */

form.addEventListener("submit", function (e) {
    e.preventDefault();
    err.textContent = "";
    document.getElementById("err-icon").style.display = "none";

    var input = document.createElement("input");
    input.type = "email";
    input.value = email.value;

    if (input.checkValidity() && input.value !== "") {
        yes.textContent = "Thank you for your patronage!";
        email.value = "";
    } else {
        document.getElementById("err-icon").style.display = "block";
        err.textContent = "Please provide a valid email.";
    }

    return false;
});

email.addEventListener("focus", function () {
    yes.textContent = "";
});
