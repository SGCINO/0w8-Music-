// JavaScript source code

$(document).ready(function () {

    $('.button').click(function () {
        $(this).addClass('active').siblings().removeClass('active');

        var filter = $(this).attr('data-filter')

        if (filter == 'all') {
            $('.image').show(400);
        }
        else {
            $('.gallery .image').not('.' + filter).hide(200)
            $('.gallery .image').filter('.' + filter).show(200)
        }
    });

    $('.gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true,
        }
    });


});

let navbar = document.querySelector('.navbar')

$(document).querySelector("#menu", oneclick = () => {
    navbar.classList.toggle('active');


    window.onscroll = () => {
        navbar.classList.remove('active');
    }
});

const status = window.navigator.onLine;
if (status) {
    online()
}
else {
    offline()
}

window.addEventListener('online', online);
window.addEventListener('offline', offline);

document.ready(function online() {
    document.getElementById('container').style.backgroundColor = 'green';
    document.querySelector('span').textContent = 'online';
});

document.ready(function offline() {
    document.getElementById('container').style.backgroundColor = 'red';
    document.querySelector('span').textContent = 'offline';
});


function download1() {
    $(this).hide;
    (location).href = 'DownloadAlbums.html';
}
function download2() {
    $(this).hide;
    (location).href = 'DownloadAlbums.html';
}
function download3() {
    $(this).hide;
    (location).href = 'DownloadAlbums.html';
}
function download4() {
    $(this).hide;
    (location).href = 'DownloadAlbums.html';
}
function download5() {
    $(this).hide;
    (location).href = 'DownloadAlbums.html';
}
function download6() {
    $(this).hide;
    (location).href = 'DownloadAlbums.html';
}
function download7() {
    $(this).hide;
    (location).href = 'DownloadAlbums.html';
}
function download8() {
    window.location.href = 'DownloadAlbums.html';
}

function signin() {
    window.location.href = 'registerfile.html';
}

function login() {
   
    window.location.href = 'login.html';
}
function manager() {
    window.location.href = 'checkOnlineUsers.html';
}