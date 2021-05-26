var arrow = document.getElementById('arrow-in');
function checkScroll() {
    let scrollingPosition = window.scrollY;
    if (scrollingPosition > 100) {
        arrow.style.visibility = "visible";
    }
    if (scrollingPosition <= 100) {
        arrow.style.visibility = "hidden";
    }
}

window.onscroll = checkScroll;