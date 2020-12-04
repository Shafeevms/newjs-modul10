const fullName = obj => `${obj.surname} ${obj.name} ${obj.middlename}`;

const dateBirth = obj => {
  const formatDate = obj.datebirth.split('-').reverse().join('.');
  const years = new Date().getFullYear() - parseInt(obj.datebirth.slice(0,4), 10);
  return `${formatDate} (${years} ${declOfNum(years, ['год', 'года', 'лет'])}) `;

}
const study = obj => {
  const date = new Date();
  const monthNow = date.getMonth() + 1;
  const yearNow  = date.getFullYear();
  const firstDate = parseInt(obj.startedu.slice(0,4), 10);
  const lastDate = firstDate + 4;
  let msg = '';
  if (yearNow - firstDate <= 4 && monthNow >= 8) {
    msg = `(${yearNow - firstDate + 1} курс)`;
  } else msg = '(закончил)';

  return `${firstDate} - ${lastDate} ${msg}`;
}

// из интернета)))
function declOfNum(n, text_forms) {
  n = Math.abs(n) % 100; let n1 = n % 10;
  if (n > 10 && n < 20) { return text_forms[2]; }
  if (n1 > 1 && n1 < 5) { return text_forms[1]; }
  if (n1 == 1) { return text_forms[0]; }
  return text_forms[2];
}

export const tableRender = array => {
  let str = array.reduce((acc, element, index) => {
    let td = `<th scope="row">${index + 1}</th><td class='td__fullname'>${fullName(element)}</td>
    <td class='td__faculty'>${element.faculty}</td><td class='td__birth'>${dateBirth(element)}</td>
    <td class='td__study'>${study(element)}</td>`;
    return acc +='<tr>'+ td + '</tr>';
  }, '');
  return str;
}

