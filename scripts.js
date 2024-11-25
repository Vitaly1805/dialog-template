const modalElement = document.getElementById("modal");

const closeStatusElement = document.getElementById("close-status");

const openBtn = document.getElementById("open-btn");

const closeBtn = document.getElementById("close-btn");

const onAnimationEnd = () => {
    document.body.classList.remove("scroll-lock");

    modalElement.classList.remove("hide");

    modalElement.close();

    modalElement.removeEventListener("animationend", onAnimationEnd);
};

const handleModalShow = () => {
    modalElement.showModal();

    document.body.classList.add("scroll-lock");
};

const handleModalClose = () => {
    modalElement.classList.add("hide");

    modalElement.addEventListener("animationend", onAnimationEnd);
};

const handleModalClick = ({ currentTarget, target }) => {
    const isClickedOnBackdrop = target === currentTarget;

    if (isClickedOnBackdrop) {
        handleModalClose()
    }
};

document.addEventListener('keydown', (e) => {
    e.preventDefault()
    handleModalClose()
})

modalElement.addEventListener("click", handleModalClick);

openBtn.addEventListener("click", handleModalShow);

closeBtn.addEventListener("click", handleModalClose);
