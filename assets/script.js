window.onload = function() {
    heroContinue = document.getElementById('hero_continue');
    enableScroll = document.getElementById('enable_scroll');
    nav = document.getElementById('navigator');

    heroContinue.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('click');
        enableScroll.scrollIntoView({behavior: "smooth"});
    });

    document.addEventListener('scroll', (event) => {
        progress = window.scrollY / window.innerHeight;
        nav.style.opacity = progress * 0.85;
    });
}