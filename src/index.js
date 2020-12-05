import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './css/style.css'
import { createPopper } from '@popperjs/core';
import * as temp from './js/templates';
import { tableRender } from './js/render';
import { students, OBJECT_LENGTH, arrayToUse } from './js/store';
import { validateEl } from './js/validation';
import { sortByProperty, sortByPropertyInverse, searchByText, searchByDate } from './js/filter';
const popcorn = document.querySelector('#popcorn');
const tooltip = document.querySelector('#tooltip');
createPopper(popcorn, tooltip);

const app = document.querySelector('#app');
app.innerHTML = temp.addForm + temp.table(tableRender(students));

let filtered = [];

app.addEventListener('submit', function (e) {
  e.preventDefault();
  const newObj = Array
    .from(app.querySelectorAll('input'))
    .map(el => validateEl(el));
  if (Object.keys(newObj).length === OBJECT_LENGTH) {
    students.push(newObj);
    tableRerender(students);
  }
})

app.addEventListener('click', function (e) {
  const target = e.target;
  filtered = arrayToUse(filtered, students);
  if (target.classList.contains('title')) {
    filtered = sortByProperty(filtered, target.dataset.name)
    tableRerender(filtered);
  } else if (target.classList.contains('filter__age')) {
    filtered = sortByPropertyInverse(filtered, target.dataset.name);
    tableRerender(filtered);
  } else if (target.classList.contains('btn-danger')) {
    tableRerender(students);
    filtered = [];
  }
})


let filteredHTML = '';
let cooldown = 0;
let timer;
app.addEventListener('input', function (e) {
  timer && clearTimeout(timer)
  cooldown = 0;
  const target = e.target;
  filtered = arrayToUse(filtered, students);
  if (target.classList.contains('search__text')) {
    filtered = searchByText(filtered, target.dataset.name, target.value.toLowerCase());
    filteredHTML = filtered;
    timer = setTimeout(() => {
      cooldown = true;
      trender();
    }, 2000)
  } else if (target.classList.contains('search__date')) {
    setTimeout(() => {
      filtered = searchByDate(filtered, target.dataset.name, target.value);
      filteredHTML = filtered;
      cooldown = true;
      trender();
    }, 2000)
  }
})
function trender() {
  if (cooldown)
    tableRerender(filteredHTML);
}

function tableRerender(arr) {
  app.querySelector('.table tbody').innerHTML = tableRender(arr);
}
