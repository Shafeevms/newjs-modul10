export const filterByProperty = (array, name) => {
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

export const filterByPropertyInverse = (array, name) => {
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


