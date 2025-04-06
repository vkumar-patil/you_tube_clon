const cart = [];

const cardValidate = function (cart) {
  if (cart.length > 0) {
    return true;
  }
};
const createCart = function (cardValidate) {
  const pr = new Promise((resolve, reject) => {
    if (!cardValidate) {
      reject("cart is emty");
    } else {
      resolve(cart);
    }
  });
  return pr;
};
const promise = createCart(cardValidate);
promise
  .then(() => {
    console.log("cart is created");
  })
  .catch((error) => {
    console.log(Error.message);
  });
