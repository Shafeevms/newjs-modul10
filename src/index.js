import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { createPopper } from '@popperjs/core';
import * as temp from './js/templates';
import { tableRender } from './js/render';
import { students } from './js/store';
const popcorn = document.querySelector('#popcorn');
const tooltip = document.querySelector('#tooltip');
createPopper(popcorn, tooltip);


// tests

const app = document.querySelector('#app');
app.innerHTML = temp.addForm + temp.table(tableRender(students));
let birth = document.querySelector('.dateBirth');

app.addEventListener('submit', function(e) {
  e.preventDefault();
  console.log(birth.value);
})

