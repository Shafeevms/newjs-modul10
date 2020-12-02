export const arrayToRender = (obj) => [fullName(obj), obj.faculty, dateBirth(obj), study(obj)]

const fullName = obj => `${obj.name} ${obj.middlename} ${obj.surname}`;

const dateBirth = obj => {
  const formatDate = obj.dateBirth.split('-').join('.');
  const years = new Date().getFullYear() - parseInt(obj.dateBirth.slice(0,4), 10);
  return `${formatDate} (${years}) ${declOfNum(years, ['год', 'года', 'лет'])}`;

}
const study = obj => {
  const date = new Date();
  const monthNow = date.getMonth() + 1;
  const yearNow  = date.getFullYear();
  const firstDate = parseInt(obj.startEdu.slice(0,4), 10);
  const lastDate = firstDate + 4;
  let msg = '';
  if (yearNow - firstDate <= 4 && monthNow >= 8) {
    msg = `(${yearNow - firstDate + 1} курс)`;
  } else msg = '(закончил)';

  return `${firstDate}-${lastDate} ${msg}`;
}

export const tableRender = array => array.forEach(element => {
  console.log(arrayToRender(element));
});

// из интернета))) хрен знает как она работает))
function declOfNum(n, text_forms) {
  n = Math.abs(n) % 100; let n1 = n % 10;
  if (n > 10 && n < 20) { return text_forms[2]; }
  if (n1 > 1 && n1 < 5) { return text_forms[1]; }
  if (n1 == 1) { return text_forms[0]; }
  return text_forms[2];
}
