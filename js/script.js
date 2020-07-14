$(function () {

    $("#typing").typed({
        strings: ["Welcome"],
        typeSpeed: 70,
        backDelay: 1500,
        startDelay: 2500,
        loop: true,
        loopCount: 'infiniti',
        contentType: 'html',
    });
    $("#typingTwo").typed({
        strings: [`<h1>Web development</h1>`],
        typeSpeed: 100,
        backDelay: 2000,
        startDelay: 2000,
        loop: true,
        loopCount: 'infiniti',
        contentType: 'html',
    });
});
$(document).ready(function () {
    $('body,html').on("click", ".nav-item>a.nav-link", function (event) {
        event.preventDefault();
        let id = $(this).attr('href');
        if(id === '#') return
        let top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 500);
    });
});

const btns = document.querySelectorAll('.services__footer div');

function removeClasses() {
    btns.forEach((div) => {
        div.classList.remove('active');
    })
}

document.querySelector('.fornt').addEventListener('click', function () {
    removeClasses();
    this.classList.add('active');
    document.querySelector('.service-text-company').innerHTML = `<h4>Front-end</h4><br>
<p> 111 Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
reprehenderit in voluptate velit esse cillum dolore eu fugiat 
nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in 
reprehenderit in voluptate velit esse cillum </p>`;
})
document.querySelector('.back').addEventListener('click', function () {
    removeClasses();
    this.classList.add('active');
    document.querySelector('.service-text-company').innerHTML = `<h4>Back-end</h4><br>
<p> 22222 Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
reprehenderit in voluptate velit esse cillum dolore eu fugiat 
nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;
})
document.querySelector('.game').addEventListener('click', function () {
    removeClasses();
    this.classList.add('active');
    document.querySelector('.service-text-company').innerHTML = `<h4>Game-dev</h4><br>
<p> 333 3 33 Lorem ipsum dolor sit amet, consectetur adipiscing elit,
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
reprehenderit in voluptate velit esse cillum dolore eu fugiat 
nulla pariatur.</p>`;
})