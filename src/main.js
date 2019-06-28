import $ from 'jquery';
import './styles.css';
import { Human } from './galactic-age';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

let user;

$(document).ready(function() {
  $("#userBirth").submit(function(event){
    event.preventDefault();

    let userBirth = $("#birthday").val();
    let today = new Date();
    let userDate = userBirth.split("-");
    let dateUserBirth = new Date(userDate[0], (userDate[1]-1), userDate[2]);
    let userAge = Math.floor(((today-dateUserBirth)/(1000*60*60*24))/365);

    user = new Human($("#name").val(), userAge);

    console.log(userBirth);
    console.log(today);

    console.log(userDate);
    console.log(dateUserBirth);
    console.log(userAge);
    console.log(user);

  })
});
