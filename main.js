var henryDisplayedImage = document.querySelector('.henryDisplayedImg');
var twelfthDisplayedImage = document.querySelector('.twelfthDisplayedImg');
var henryThumbBar = document.querySelector('.henryThumbBar');
var henryImages = ['henry1.jpg', 'henry2.jpg', 'henry3.jpg', 'henry4.jpg', 'henry5.jpg', 'henry6.jpg', 'henry7.jpg', 'henry8.jpg', 'henry9.jpg', 'henry10.jpg',]
var twelfthImages = ['twelfth1.jpg', 'twelfth2.jpg', 'twelfth3.jpg', 'twelfth4.jpg', 'twelfth5.jpg', 'twelfth6.jpg', 'twelfth7.jpg']
var twelfthThumbBar = document.querySelector('.twelfthThumbBar');

for (image of henryImages) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    henryThumbBar.appendChild(newImage);
};


for (image of twelfthImages) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    twelfthThumbBar.appendChild(newImage);
};

function henryDisplayImage(event) {
    henryDisplayedImage.src = event.target.src;
}

function twelfthDisplayImage(event) {
    twelfthDisplayedImage.src = event.target.src;
}

henryThumbBar.addEventListener('click', henryDisplayImage);

twelfthThumbBar.addEventListener('click', twelfthDisplayImage);
