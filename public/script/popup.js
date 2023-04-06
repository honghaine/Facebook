const newpost = document.getElementById("newpost");

const modal = document.getElementById("modal");

const closez = document.getElementsByClassName("close")[0];

function display() {
    modal.style.display = "block";
}


window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}

const container = document.querySelector(".container"),
privacy = container.querySelector(".postbox .privacy"),
arrowBack = container.querySelector(".audience .arrow-back");

privacy.addEventListener("click", () => {
  container.classList.add("active");
});

arrowBack.addEventListener("click", () => {
  container.classList.remove("active");
});