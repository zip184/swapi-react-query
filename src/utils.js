export const sortByProp = (objArr, key) =>
  objArr.sort((a, b) => (a[key] > b[key] ? 1 : -1));
