const newpost = document.getElementById("newpost");

const modal = document.getElementById("modal");

const closez = document.getElementsByClassName("close")[0];

function display() {
    modal.style.display = "block";
}

closez.addEventListener("click", () => {
    modal.style.display = 'none';
})

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}
