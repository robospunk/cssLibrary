let navs = document.querySelectorAll('nav, .nav');

// for (let i = 0; i < navs.length; i++) {
//     if (navs[i].querySelector(".collapse") != null) {
//         navs[i].querySelector(".collapse").style.display = "none";
//     }
// }

document.addEventListener('click', listenForClicks);

function listenForClicks(e) {
    if (e.target.classList.contains('collapseToggle')) {
        e.target.parentNode.querySelector('.collapse').classList.toggle('expand');
    }
}