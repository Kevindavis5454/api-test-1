'use strict';

function getDogImage() {
    const multipleDogImages = "https://dog.ceo/api/breeds/image/random/";
    let howManyDogs = $('#dog-number').val();
    fetch(multipleDogImages + howManyDogs)
        .then(response => response.json())
        .then(responseJson => console.log(responseJson));
}


function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        getDogImage();
    });
}

$(function() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
});