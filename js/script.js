let navs = document.querySelectorAll('nav, .nav');

for (let i = 0; i < navs.length; i++) {
    
}

document.addEventListener('click', listenForClicks);

function listenForClicks(e) {
    if (e.target.classList.contains('collapseToggle')) {
        console.log('toggle');
    }
}