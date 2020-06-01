'use strict';

function getDogImage(dog = 3) {
    fetch(`https://dog.ceo/api/breeds/image/random/${dog}`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);
  
  for (let dog of responseJson.message){
    $('.dogresults').append(`<img src='${dog}'>`)
  };

  $('.dogresults').removeClass('hidden');
}

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let getDogs = $('input[name="getDogs"]').val();
    getDogImage(getDogs);
  });
}

$(function() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
});