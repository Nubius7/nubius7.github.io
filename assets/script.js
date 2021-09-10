window.onload = function() {
    /* Scrolling */
    var heroContinue = document.getElementById('hero_continue');
    var enableScroll = document.getElementById('enable_scroll');
    var nav = document.getElementById('navigator');

    heroContinue.addEventListener('click', (event) => {
        event.preventDefault();
        enableScroll.scrollIntoView({behavior: "smooth"});
    });

    document.addEventListener('scroll', (event) => {
        progress = window.scrollY / window.innerHeight;
        nav.style.opacity = progress * 0.85;
    });

    /* Fixing Background resizing on mobile */
     var background = document.getElementsByClassName('html');
    window.addEventListener('resize', (event) => {
        background.height = window.height + 60;
    });
    background.height = window.height + 60;
}