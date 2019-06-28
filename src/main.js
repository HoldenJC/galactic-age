import $ from 'jquery';
import './styles.css';
import { Human } from './galactic-age';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

let user;

function userOutput(){
  $("#results").append(`Your solar age on Earth: <span class="solarAges">${user.ageEarth}</span> years old<br>`);
  $("#results").append(`Your solar age on Mercury: <span class="solarAges">${user.ageMercury}</span> years old<br>`);
  $("#results").append(`Your solar age on Venus: <span class="solarAges">${user.ageVenus}</span> years old<br>`);
  $("#results").append(`Your solar age on Mars: <span class="solarAges">${user.ageMars}</span> years old<br>`);
  $("#results").append(`Your solar age on Jupiter: <span class="solarAges">${user.ageJupiter}</span> years old<br>`);

  $("#results").append(`<br>If you were living on Mercury, ${user.displayExpectancy(user.mercuryLife)}!<br>`);
  $("#results").append(`If you were living on Venus, ${user.displayExpectancy(user.venusLife)}!<br>`);
  $("#results").append(`If you were living on Mars, ${user.displayExpectancy(user.marsLife)}!<br>`);
  $("#results").append(`If you were living on Jupiter, ${user.displayExpectancy(user.jupiterLife)}!<br>`);

  $("#endMessage").append(`<br>Thanks for using the solar calculator, ${user.name}!`)
  $("#userBirth").slideUp();
  $("#results").delay(800).slideDown();
  $("#endMessage").delay(800).fadeIn();
}


$(document).ready(function() {
  $("#userBirth").submit(function(event){
    event.preventDefault();

    let userBirth = $("#birthday").val();
    let today = new Date();
    let userDate = userBirth.split("-");
    let dateUserBirth = new Date(userDate[0], (userDate[1]-1), userDate[2]);
    let userAge = (((today-dateUserBirth)/(1000*60*60*24))/365).toFixed(2) * 1;

    user = new Human($("#name").val(), userAge);

    user.extraterrestrialAge();
    user.extraterrestrialExpectancy();

    userOutput();

    console.log(userBirth);
    console.log(today);

    console.log(userDate);
    console.log(dateUserBirth);
    console.log(userAge);
    console.log(user);

  });
});
