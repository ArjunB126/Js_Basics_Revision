const modal = document.querySelector (".modal");
const overlay = document.querySelector(".overlay");


const openModal = () => {
    console.log("Modal is Open");
    modal.classList.add ("active");
    overlay.classList.add("overlayactive");
}


