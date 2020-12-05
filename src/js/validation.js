import { START_DATE_1900, START_DATE_2000 } from './store';

export const textValid = text => !/\d/.test(text) && text.length > 3 ? true : false;

export const dateValid = (date, startDate) => {
  return date.length === 10 && Date.parse(date) >= startDate && Date.parse(date) <= Date.now() ? true : false;
}

export const validation = (tag, func, constDate) => func(tag.value.trim(), constDate) ? true : false;

export const validateEl = el => {
  const newObj = {};
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
  return newObj;
}
