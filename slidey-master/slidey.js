/*
 * Slidey 0.2
 *
 * Author: Gautham Yerroju
 * GitHub: https://github.com/GauthamYerroju/Slidey
 */

function toggleSlidey() {
    document.getElementById('slidey').classList.toggle('slidey--open');
}

function closeSlidey() {
    document.getElementById('slidey').classList.remove('slidey--open');
}

window.onload = function() {
    document.getElementById('slidey__toggle').addEventListener('click', function() {
        toggleSlidey();
    });

    document.getElementById('slidey__close').addEventListener('click', function() {
        closeSlidey();
    });
}
