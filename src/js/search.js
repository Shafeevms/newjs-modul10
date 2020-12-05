export const searchByText = (array, prop, text) => {
  let newArr = [...array];
  return newArr.filter(object => object[prop].toLowerCase().includes(text))
}

export const searchByDate = (array, prop, text) => {
  let newArr = [...array];
  return newArr.filter(object => object[prop].slice(0, 4).includes(text))
}
