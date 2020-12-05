import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './css/style.css'
import { createPopper } from '@popperjs/core';
import * as temp from './js/templates';
import { tableRender } from './js/render';
import { students, arrayToUse } from './js/store';
import { validation, dateValid, textValid } from './js/validation';
import { START_DATE_1900, START_DATE_2000 } from './js/store';
import { sortByProperty, sortByPropertyInverse, searchByText, searchByDate } from './js/filter';
const popcorn = document.querySelector('#popcorn');
const tooltip = document.querySelector('#tooltip');
createPopper(popcorn, tooltip);

const app = document.querySelector('#app');
app.innerHTML = temp.addForm + temp.table(tableRender(students));

let filtered = [];

app.addEventListener('submit', function(e) {
  e.preventDefault();
  const newObj = {};
  let valid = true;
  const inputs = Array
   .from(app.querySelectorAll('.input-form'));
   inputs.forEach(el => {
     el.dispatchEvent
    if (el.getAttribute('type') === 'text') {
      if (validation(el, textValid)) {
        newObj[el.dataset.name] = el.value.trim();
        el.classList.remove('is-invalid');
      } else {
        el.classList.add('is-invalid');
        valid = false;
      }
    } else if (el.getAttribute('type') === 'date' && el.dataset.name === 'datebirth') {
      if (validation(el, dateValid, START_DATE_1900)) {
        newObj[el.dataset.name] = el.value;
        el.classList.remove('is-invalid');
      } else {
        el.classList.add('is-invalid');
        valid = false;
      }
    } else if (el.getAttribute('type') === 'date' && el.dataset.name === 'startedu') {
      if (validation(el, dateValid, START_DATE_2000)) {
        newObj[el.dataset.name] = el.value;
        el.classList.remove('is-invalid');
      } else {
        el.classList.add('is-invalid');
        valid = false;
      }
    }
  })
  if (valid) {
    students.push(newObj);
    tableRerender(students);
    inputs.forEach(el => el.value = '');
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
    Array.from(app.querySelectorAll('.search').forEach(el => el.value = ''));
  }
})

let filteredHTML = '';
let timer;
app.addEventListener('input', function (e) {
  timer && clearTimeout(timer);
  const target = e.target;
  filtered = arrayToUse(filtered, students);
  if (target.classList.contains('search__text')) {
    filtered = searchByText(filtered, target.dataset.name, target.value.toLowerCase());
    filteredHTML = filtered;
    timer = setTimeout(() => {
      trender();
    }, 1000)
  } else if (target.classList.contains('search__date')) {
    setTimeout(() => {
      filtered = searchByDate(filtered, target.dataset.name, target.value);
      filteredHTML = filtered;
      trender();
    }, 1000);
  }
})
function trender() {
    tableRerender(filteredHTML);
}

function tableRerender(arr) {
  app.querySelector('.table tbody').innerHTML = tableRender(arr);
}
