export const sortByProperty = (array, name) => {
  let newArray = [...array];
  return newArray.sort((a, b) => {
    if (a[name] > b[name]) {
      return 1;
    }
    if (a[name] < b[name]) {
      return -1;
    }
    return 0;
  })
}

export const sortByPropertyInverse = (array, name) => {
  let newArray = [...array];
  return newArray.sort((a, b) => {
    if (a[name] > b[name]) {
      return -1;
    }
    if (a[name] < b[name]) {
      return 1;
    }
    return 0;
  })
}
export const searchByText = (array, prop, text) => {
  let newArr = [...array];
  return newArr.filter(object => object[prop].toLowerCase().includes(text))
}

export const searchByDate = (array, prop, text) => {
  let newArr = [...array];
  return newArr.filter(object => object[prop].slice(0, 4).includes(text))
}

