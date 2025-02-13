const alternatives = [
    { text: "Please, just say yes!", images: "images/cat-01.gif" },
    { text: "I promise it'll be unforgettable... please!", images: "images/cat-02.gif" },
    { text: "Come on, think about it... don't leave me hanging!", images: "images/cat-03.gif" },
    { text: "Please, don't say no... take a chance!", images: "images/cat-04.gif" },
    { text: "Don't let fear ruin this moment... say yes!", images: "images/cat-05.gif" }
];

const ohYes = { text: "I knew you'd say yes!", images: "images/cat-yes.gif" };

const title = document.querySelector('.title');
const text = document.querySelector('.text');
const cat = document.querySelector('.cat');
const yesButton = document.querySelector('.button__yes');
const noButton = document.querySelector('.button__no');
const errorButton = document.querySelector('.button__error');

let count = 0;

function updateDisplay(item) {
    cat.src = item.images;
    text.innerHTML = item.text;
}

yesButton.addEventListener('click', () => {
    updateDisplay(ohYes);
    yesButton.style.display = 'none';
    noButton.style.display = 'none';
});

noButton.addEventListener('click', () => {
    count++;
    if (count < alternatives.length) {
        updateDisplay(alternatives[count]);
    } else {
        yesButton.style.display = 'none';
        noButton.style.display = 'none';
        errorButton.style.display = 'inline-block';
    }
});

errorButton.addEventListener('click', () => {
    count = 0;
    updateDisplay(alternatives[count]);
    yesButton.style.display = 'inline-block';
    noButton.style.display = 'inline-block';
    errorButton.style.display = 'none';
});
