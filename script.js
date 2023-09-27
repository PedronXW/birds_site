let prev = document.getElementById('prev');
let next = document.getElementById('next');
let carousel = document.getElementById('carousel');
let gap = 48;
let width = carousel.children[0].clientWidth;
let size = carousel.children.length;
let carouselWidth = carousel.clientWidth;
let showedItemsQuantity = carousel.clientWidth / (width + gap);
let current = 0;

prev.addEventListener('click', function () {
    prevSlide();
})

next.addEventListener('click', function () {
    nextSlide();
})

if(current === 0) {
    prev.style.visibility= "hidden";
}

function moveProductList() {
    carousel.style.transform = "translateX(-"+ ((width+gap)*current) +"px)";
}

function prevSlide() {
    if (current > 0) {
        current--;
        moveProductList();
    }
    if(current < size - Math.floor(showedItemsQuantity)) {
        next.style.visibility= "visible";
    }
    if(current === 0) {
        prev.style.visibility= "hidden";
    }
}

function nextSlide() {
    if (current < size - Math.floor(showedItemsQuantity)) {
        current++;
        moveProductList();
    }
    if(current === size - Math.floor(showedItemsQuantity)) {
        next.style.visibility= "hidden";
    }
    if(current > 0) {
        prev.style.visibility= "visible";
    }
}