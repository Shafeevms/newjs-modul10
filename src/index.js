import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './css/style.css'
import { createPopper } from '@popperjs/core';
import * as temp from './js/templates';
import { tableRender } from './js/render';
import { students, START_DATE_1900, START_DATE_2000, OBJECT_LENGTH } from './js/store';
import { textValid, dateValid, validation } from './js/validation';
const popcorn = document.querySelector('#popcorn');
const tooltip = document.querySelector('#tooltip');
createPopper(popcorn, tooltip);

const app = document.querySelector('#app');
app.innerHTML = temp.addForm + temp.table(tableRender(students));


app.addEventListener('submit', function(e) {
  e.preventDefault();
  const newObj = {};
  Array
   .from(app.querySelectorAll('input'))
   .map(el => {
    if (el.getAttribute('type') === 'text') {
      if (validation(el, textValid)) {
        newObj[el.dataset.name] = el.value.trim();
        el.value = '';
        el.classList.remove('is-invalid');
      } else el.classList.add('is-invalid');
    } else if (el.getAttribute('type') === 'date' && el.dataset.name === 'datebirth') {
      if (validation(el, dateValid, START_DATE_1900)) {
        newObj[el.dataset.name] = el.value;
        el.value = '';
        el.classList.remove('is-invalid');
      } else el.classList.add('is-invalid');
    } else if (el.getAttribute('type') === 'date' && el.dataset.name === 'startedu') {
      if (validation(el, dateValid, START_DATE_2000)) {
        newObj[el.dataset.name] = el.value;
        el.value = '';
        el.classList.remove('is-invalid');
      } else el.classList.add('is-invalid');
    }
  })
  if (Object.keys(newObj).length === OBJECT_LENGTH) {
    students.push(newObj);
    app.querySelector('.table').innerHTML = temp.table(tableRender(students));
  }
})







