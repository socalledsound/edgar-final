const navLeft = document.querySelector('#nav-left');
const navRight = document.querySelector('#nav-right');
const baseURL = '';
let currentURL = window.location.href;
let leftDestination, rightDestination;



const destinations = [
    'index.html',
    'spontaneous.html',
    'firstone.html',
    'songwithjoshualhill.html',
];

const currentPage = destinations.indexOf(currentURL);
console.log(currentPage);

const numberOfDestinations = destinations.length;
console.log(numberOfDestinations);

if(currentPage != -1){
    if(currentPage === 0){
        leftDestination = destinations.length - 1;
    } else {
        leftDestination = currentPage - 1;
    }

    if(currentPage === 3){
        rightDestination = 0;
    } else {
        rightDestination = currentPage + 1;
    }
}

navLeft.href = destinations[leftDestination];
navRight.href = destinations[rightDestination];
