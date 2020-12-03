import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import { createPopper } from '@popperjs/core';
import * as temp from './js/templates';
import { tableRender } from './js/render';
import { students, START_DATE_1900, START_DATE_2000 } from './js/store';
import { textValid, dateValid, validation } from './js/validation';
const popcorn = document.querySelector('#popcorn');
const tooltip = document.querySelector('#tooltip');
createPopper(popcorn, tooltip);

const app = document.querySelector('#app');
app.innerHTML = temp.addForm + temp.table(tableRender(students));


app.addEventListener('submit', function(e) {
  e.preventDefault();
  const newObj = {};
  const name = app.querySelector('#studentName');
  const middleName = app.querySelector('#studentMiddlename');
  const surname = app.querySelector('#studentSurname');
  const dateBirth = app.querySelector('.dateBirth');
  const startEdu = app.querySelector('.eduStart');
  const faculty = app.querySelector('.faculty');

  validation(name, textValid);
  validation(middleName, textValid);
  validation(surname, textValid);
  validation(faculty, textValid);
  validation(dateBirth, dateValid,START_DATE_1900);
  validation(startEdu, dateValid, START_DATE_2000);


  // students.push({
  //   name: name.value.trim(),
  //   middlename: middleName.value.trim(),
  //   surname: surname.value.trim(),
  //   faculty: faculty.value.trim(),
  //   dateBirth: birth.value,
  //   startEdu: eduStart.value,
  // })


})

