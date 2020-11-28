import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { createPopper } from '@popperjs/core';
import * as temp from './js/templates';
const popcorn = document.querySelector('#popcorn');
const tooltip = document.querySelector('#tooltip');
createPopper(popcorn, tooltip);


// tests

const app = document.querySelector('#app');
app.innerHTML = temp.addForm;
let birth = document.querySelector('.dateBirth');

app.addEventListener('submit', function(e) {
  e.preventDefault();
  console.log(birth.value) // string

})
