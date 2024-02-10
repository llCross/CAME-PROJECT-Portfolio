const nameLink = document.querySelectorAll('.name-link');

const aboutDetails = document.querySelectorAll('.about-details');
const beraniaDetails = document.querySelector('#berania-details');
const aggabaoDetails = document.querySelector('#aggabao-details');
const yonzonDetails = document.querySelector('#yonzon-details');
const delossantosDetails = document.querySelector('#delossantos-details');

const aboutPhotos = document.querySelectorAll('.about-profile');
const beraniaPhoto = document.querySelector('#berania-photo');
const aggabaoPhoto = document.querySelector('#aggabao-photo');
const yonzonPhoto = document.querySelector('#yonzon-photo');
const delossantosPhoto = document.querySelector('#delossantos-photo');

const sideMenu = document.querySelector('.nav-titles');
const openButton = document.querySelector('#menu-button');
const closeButton = document.querySelector('#close-menu-button');

openButton.addEventListener('click', () => {
    showMenu();
});

closeButton.addEventListener('click', () => {
    closeMenu();
});

function showMenu() {
    sideMenu.style.right = "0";
}

function closeMenu() {
    sideMenu.style.right = "-200px";
}

nameLink.forEach(link => {
    link.addEventListener('click', () => {
        showLink(link);
        showDetails(link);
        showPhoto(link);
    });
});

function showLink(clickedLink) {
    nameLink.forEach(link => {
        link.classList.remove('active-link');
    });
    clickedLink.classList.add('active-link');
}

function showDetails(clickedLink) {
    aboutDetails.forEach(details => {
        details.classList.remove('active-details');
    });

    if (clickedLink.innerText === 'Berania') {
        beraniaDetails.classList.add('active-details');
    } else if (clickedLink.innerText === 'Aggabao') {
        aggabaoDetails.classList.add('active-details');
    } else if (clickedLink.innerText === 'Yonzon') {
        yonzonDetails.classList.add('active-details');
    } else if (clickedLink.innerText === 'Delos Santos') {
        delossantosDetails.classList.add('active-details');
    } else {
        console.log(clickedLink.innerText);
    }
};

function showPhoto(clickedLink) {
    aboutPhotos.forEach(photo => {
        photo.classList.remove('active-photo');
    });

    if (clickedLink.innerText === 'Berania') {
        beraniaPhoto.classList.add('active-photo');
    } else if (clickedLink.innerText === 'Aggabao') {
        aggabaoPhoto.classList.add('active-photo');
    } else if (clickedLink.innerText === 'Yonzon') {
        yonzonPhoto.classList.add('active-photo');
    } else if (clickedLink.innerText === 'Delos Santos') {
        delossantosPhoto.classList.add('active-photo');
    } else {
        console.log(clickedLink.innerText);
    }
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// const toolsLogo = document.querySelector('.tools-logo');
// const logoTitles = document.querySelector('.logo-titles');

// toolsLogo.addEventListener('mouseenter', () => {
//     logoTitles.classList.add = 'active-logo';
// });

// toolsLogo.addEventListener('mouseleave', () => {
//     logoTitles.classList.remove = 'active-logo';
// });
