
var slider = [
    "img/img-1.jpg",
    "img/img-2.png",
    "img/img-3.jpg",
    "img/img-4.jpg",
    "img/img-5.jpg"
]

var img = document.querySelector('#slider-img');
var count = 0;


function next() {
    count++;

    if(count >= slider.length) {
        count = 0;
        img.src = slider[count]
    } else {
        img.src = slider[count]
    }

}

function prev() {
    count--;

    if(count < 0 ) {
        count = slider.length - 1;
        img.src = slider[count]
    } else {
        img.src = slider[count]
    }

}