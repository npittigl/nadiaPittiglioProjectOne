
// JAVASCRIPT for menu to slide out/in on smaller screens:

// 1. target hamburger menu button 
const menuButton = document.querySelector('.toggle')

// 2. function to toggle class on ul to slide in and out of screen view
const menuSlidesInOut = function () {
    // get ul element from HTML
    const menuList = document.getElementById('menu');

    // add/remove class that allows ul to slide in/out
    menuList.classList.toggle('slideOut');
}

// 3. add event listener to the menu button
menuButton.addEventListener('click', function () {
    // target button's child <i>; toggles class to replace hamburger with 'x' icon & vice versa
    this.children[0].classList.toggle('fa-times');

    // calls function that adds/removes class to allow ul to slide in/out
    menuSlidesInOut();
});
