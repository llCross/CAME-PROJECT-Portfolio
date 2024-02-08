const nameLink = document.querySelectorAll('.name-link');
const aboutDetails = document.querySelectorAll('.about-details');
const beraniaDetails = document.querySelector('#berania-details');
const aggabaoDetails = document.querySelector('#aggabao-details');
const yonzonDetails = document.querySelector('#yonzon-details');
const delossantosDetails = document.querySelector('#delossantos-details');

nameLink.forEach(link => {
    link.addEventListener('click', () => {
        showLink(link);
        showDetails(link);
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
        console.log('Berania yey!');
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