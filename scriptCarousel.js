// adapted from work completed by Marcus Michaels
// SOURCE: https://medium.com/@marcusmichaels/how-to-build-a-carousel-from-scratch-in-vanilla-js-9a096d3b98c9

// name space
const app = {}

// array of images
app.pictures = [
    {
        src: './assetsCarousel/beachSunset.jpg',
        alt: 'Image of a pink sunset on an empty beach.'
    },
    {
        src: './assetsCarousel/colourfulHouses.jpg',
        alt: 'Street view of brightly painted homes with a blue car parked on the road in front of the houses.'
    },
    {
        src: './assetsCarousel/birdsInSky.jpg',
        alt: 'Image of birds flying against a purple-pink dusk sky.'
    },
    {
        src: './assetsCarousel/bridge.jpg',
        alt: 'Image of a suspension bridge against a pink sky as sun sets.'
    },
    {
        src: './assetsCarousel/pinkHouse.jpg',
        alt: 'Image of the side of a pink house with green shutters.'
    },
    {
        src: './assetsCarousel/greekArchitecture.jpg',
        alt: 'Image of ancient Greek building with columns.'
    },
    {
        src: './assetsCarousel/mountains.jpg',
        alt: 'Image of mountainous landscape at sunrise.'
    },
    {
        src: './assetsCarousel/veniceGrandCanal.jpg',
        alt: 'Sunset over the buildings and Grand Cananl of Venice, Italy.'
    }
]

// DECLARE GLOBAL VARIABLES:
// store li class in a variable
const listItemClassName = 'carouselPhoto';
// store all li elements with same class in a variable
const listItems = document.getElementsByClassName(listItemClassName);
// set current index
let i = 0;

// 1. function to create and append img elements to the DOM
app.createAndAppendImgElement = function () {
    // map over pictures array to create img elements with img source & alternative descriptions
    const imageElementArray = app.pictures.map((image) => {
        // store image source from 'pictures' array in a variable
        const imageSource = image.src;
        // store image alt description from 'pictures' array in a variable
        const imgAltDescription = image.alt;

        // create img element for each item in 'pictures' array; populate with img source and alt decription
        const imageElement = document.createElement('img');
        imageElement.src = imageSource;
        imageElement.alt = imgAltDescription;

        // return img elements in a new array
        return imageElement;
    });

    // target ul to append li children with images
    const carouselContainer = document.getElementById('carouselContainer');

    // 2. loop over each item in image element array to append to the DOM
    imageElementArray.forEach((image) => {
        // create new li to append images to
        const listItem = document.createElement('li');
        // add class to li for styling
        listItem.classList.add('carouselPhoto');

        // append images to li
        listItem.appendChild(image);
        // append li's to ul
        carouselContainer.appendChild(listItem);
    });
}

// 3. function to set initial classes
app.setInitialClasses = function () {
    // target the previous, currently active, and next image in carousel
    listItems[totalImages - 1].classList.add('prev');
    listItems[0].classList.add('active');
    listItems[1].classList.add('next');
}

// 4. function to set event listeners to buttons
app.setEventListeners = function () {
    // store next/previous button in a variable
    nextPhoto = document.getElementById('nextButton');
    prevPhoto = document.getElementById('prevButton');

    // add event listener to next/previous button
    nextPhoto.addEventListener('click', app.moveNextPhoto);
    prevPhoto.addEventListener('click', app.movePrevPhoto);
}

// 5. function to handle movement of carousel; takes an index (i) number as an argument
app.slideCarousel = function (i) {
    // declare variables
    let previousImage = i - 1;
    let nextImage = i + 1;
    let oldPrevious = i - 2;
    let oldNext = i + 2;

    // test if index of listItems array is <= listItems.length - 1
    if (i <= (totalImages - 1)) {
        // checks and updates if index numbers are out of bounds
        if (previousImage <= 0) {
            oldPrevious = (totalImages - 1);
        } else if (nextImage >= (totalImages - 1)) {
            oldNext = 0;
        }

        // checks and updates if carousel is at the beginning or end
        if (i === 0) {
            previousImage = (totalImages - 1);
            oldPrevious = (totalImages - 2);
            oldNext = (i + 2);
        } else if (i === (totalImages - 1)) {
            previousImage = (i - 1);
            nextImage = 0;
            oldNext = 1;
        }

        // add/remove classes to trigger carousel transitions:

        // reset old next/previous elements to default classes
        listItems[oldPrevious].className = listItemClassName;
        listItems[oldNext].className = listItemClassName;

        // add new classes
        listItems[previousImage].className = `${listItemClassName} prev`;
        listItems[i].className = `${listItemClassName} active`;
        listItems[nextImage].className = `${listItemClassName} next`;
    }
}

// 6. next button navigation handler
app.moveNextPhoto = function () {
    // if photo is last item in listItems object, reset carousel to 0, else add 1
    if (i === (totalImages - 1)) {
        i = 0;
    } else {
        i++
    }

    // move carousel to update index number
    app.slideCarousel(i);
}

// 7. previous button navigation handler
app.movePrevPhoto = function () {
    // if photo is the first item in listItems object, set as the last item, else subtract 1
    if (i === 0) {
        i = (totalImages - 1);
    } else {
        i--;
    }

    // move carousel to updated index number
    app.slideCarousel(i);
}

// 8. create init function
app.init = function () {
    // call functions
    app.createAndAppendImgElement();

    // total number of items in listItems object
    totalImages = listItems.length;
    app.setInitialClasses();
    app.setEventListeners();
}

// 9. call init functon
app.init();