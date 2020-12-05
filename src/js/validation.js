export const textValid = text => !/\d/.test(text) && text.length > 3 ? true : false;

export const dateValid = (date, startDate) => {
  return date.length === 10 && Date.parse(date) >= startDate && Date.parse(date) <= Date.now() ? true : false;
}

export const validation = (tag, func, constDate) => func(tag.value.trim(), constDate) ? true : false;

