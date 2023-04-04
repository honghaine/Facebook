const registrationForm = document.getElementsByClassName("registration")[0];

function display () {
    registrationForm.style.display = 'block';
}

function disappear() {
    registrationForm.style.display = 'none';
}

// registrationForm.addEventListener("click", () => {
//     registrationForm.style.display = 'none';
// })

window.onclick = function(event) {
    console.log(event.target);
    if (event.target == registrationForm) {
        registrationForm.style.display = "none";
    }
}