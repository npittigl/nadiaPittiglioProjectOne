// Adapted from work of Victor Eke => https://www.freecodecamp.org/news/how-to-build-a-modal-with-javascript/

// declare variables:
const modalButton = document.querySelector('.btnClose');

// add event listener to close button ('X')
modalButton.addEventListener('click', function () {
    // get target elements
    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.overlay');
    // apply display: none to target elements when close button is clicked
    modal.style.display = "none";
    overlay.style.display = "none";
});