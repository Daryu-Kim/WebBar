const musicbox = document.querySelector('.header-musicbox-player > iframe');
const header_share = document.querySelector('#SHARE');
const header_about = document.querySelector('#ABOUT');
const overlay = document.querySelector('.overlay');
const overlay_share = document.querySelector('.overlay-share');
const overlay_about = document.querySelector('.overlay-about');

const audio = document.querySelectorAll('.footer-center-audio');
const play = document.querySelectorAll('#play');
const pause = document.querySelectorAll('#pause');
const volume = document.querySelectorAll('.footer-center-volume');

header_share.addEventListener('click', function() {
    ElementON(overlay, 'block');
    if (overlay_share.style.display == 'none') {
        ElementON(overlay_share, 'flex');
    }
});

header_about.addEventListener('click', function() {
    ElementON(overlay, 'block');
    if (overlay_about.style.display == 'none') {
        ElementON(overlay_about, 'flex');
    }
})

overlay.addEventListener('click', function() {
    ElementOFF(overlay);
    if (overlay_share.style.display == 'flex') {
        ElementOFF(overlay_share);
    }
    if (overlay_about.style.display == 'flex') {
        ElementOFF(overlay_about);
    }
});

play.forEach(function (element, index) {
    element.addEventListener('click', function() {
        element.style.display = 'none';
        pause[index].style.display = 'block';
        audio[index].play();
    });
});

pause.forEach(function (element, index) {
    element.addEventListener('click', function() {
        element.style.display = 'none';
        play[index].style.display = 'block';
        audio[index].pause();
    });
});

volume.forEach(function (element, index) {
    element.addEventListener('input', function() {
        audio[index].volume = element.value / 100;
    });
});

function ElementOFF(element) {
    element.animate([
        {
            opacity: 1
        },

        {
            opacity: 0
        },

        {
            easing: "ease-in-out"
        }

    ], 400);
    setTimeout(
        function () {
            element.style.display = 'none';
        }, 200);
}

function ElementON(element, display) {
    element.style.display = display;
    element.animate([
        {
            opacity: 0
        },

        {
            opacity: 1
        },

        {
            easing: "ease-in-out"
        }

    ], 400);
}