let modal1 = document.getElementById("modal");
let modalSubmit = document.getElementById("modalSubmit");
function toggleModal() {
  modal1.classList.toggle("hidden");
}
function toggleModalSubmit() {
  modalSubmit.classList.toggle("hidden");
  if (modal1.style.display != "none") {
    modal1.style.display = "none";
  } else {
    modal1.style.display = "";
  }
}
