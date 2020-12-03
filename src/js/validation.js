import { textError } from './templates';

export const textValid = text => !/\d/.test(text) && text.length > 3 ? true : false;

export const dateValid = (date, startDate) => {
  return date.length === 10 && Date.parse(date) >= startDate && Date.parse(date) <= Date.now() ? true : false;
}

export const validation = (tag, func, constDate) => {
  if(func(tag.value.trim(), constDate)) {
    tag.classList.remove('is-invalid');
    tag.value = '';
  } else {
    tag.classList.add('is-invalid');
    return false;
  }
}
