var modal = document.getElementsByClassName("container-modal")[0];
var titleModal = document.querySelector("#title-modal");
var textModal = document.querySelector("#text-modal");
function openModal(membres) {
  if (membres === "tete") {
    titleModal.innerHTML = "La tête";
    textModal.innerHTML =
      "La tête est ce qui nous sert à réfléchir et à développer même si certains ne s'en servent pas assez :P";
  } else if (membres === "epaule") {
    titleModal.innerHTML = "Les Epaules";
    textModal.innerHTML =
      "Les épaules nous servent à supporter le poids de toutes ces connaissances";
  } else if (membres === "ventre") {
    titleModal.innerHTML = "Le Ventre";
    textModal.innerHTML =
      "Là où le stress nous bousille l'estomac et les intestins";
  } else if (membres === "appareil reproducteur") {
    titleModal.innerHTML = "L'appareil reproducteur";
    textModal.innerHTML =
      "Ce dont on a plus le  temps de se servir avec tout ces cours x)";
  } else if (membres === "jambes") {
    titleModal.innerHTML = "Les Jambes";
    textModal.innerHTML =
      "Ce dont on a besoin pour arriver en courant quand on est en retard";
  }
  modal.style.display = "block";
}
function closeModal() {
  modal.style.display = "none";
  song.pause();
}
window.addEventListener("click", function(e) {
  if (e.target === modal) {
    closeModal();
  }
});

var song = new Audio();

function clickSong() {
  song = new Audio("./media/son.mp3");
  song.play();
}

window.addEventListener("click", function(e) {
  if (e.target === modal) {
    closeModal();
    song.pause();
  }
  console.log(e.target);
});
