function Article(price = 0) {
  this.price = price;

  this.addDiscount = (discount) =>
    (this.price = (this.price * (100 - discount)) / 100);
}

const cupons = {
  KEVIN: 10,
  END: 15,
  TIERRA: 5,
};

const article = new Article();

function calculateDiscount() {
  let price = document.getElementById("input--price").value;
  const discount = document.getElementById("input--discount").value;
  const cupon = document.getElementById("input--cupon").value;
  const result = document.getElementById("result");

  if (cupons[cupon] === undefined) return alert("Cupon invalido");

  const cuponDiscount = cupons[cupon];

  article.price = price;
  article.addDiscount(discount);
  article.addDiscount(cuponDiscount);

  price = article.price;

  result.innerText = `Resultado: ${price} $`;
}
