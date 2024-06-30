export function calcPageQuan(elQuantity) {
  const limit = 12;
  const numberOfRecipies = elQuantity;
  const pageQuantity = numberOfRecipies / limit;
  return Math.ceil(pageQuantity);
}

export function getElNumOnPage(currentPage) {
  return currentPage * 12 - 12;
}
