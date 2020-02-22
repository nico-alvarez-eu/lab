/* For showing the intro modals */
// Slothy
const slothyModal = document.querySelector("#intro-slothy");
if (slothyModal !== null) {
    const slothyShutUp = document.querySelector(".intro-modal-close");

    window.addEventListener("load", (e) => {
        if(localStorage.getItem("slothyModalState") === "shown"){
            slothyModal.style.display = "none";
        } else {
            slothyModal.style.display = "block";
        }
    });

    slothyShutUp.addEventListener('click', (e) => {
        localStorage.setItem("slothyModalState","shown");
        slothyModal.style.display = "none";
    });
}