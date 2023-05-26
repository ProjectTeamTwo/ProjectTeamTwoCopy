const giftconBuyProductImg = document.querySelector(
  ".giftcon_buy--product_img"
);
const giftconBuyProductName = document.querySelector(
  ".giftcon_buy--product_name"
);
const giftconBuyProductPrice = document.querySelector(
  ".giftcon_buy--product_price"
);
const giftconBuyPayDetailProductPrice = document.querySelector(
  ".giftcon_buy--pay_detail--product_price"
);
const giftconBuyPayDetailDelivery = document.querySelector(
  ".giftcon_buy--pay_detail--shipping_fee"
);
const giftconBuyPayDetailTotal = document.querySelector(
  ".giftcon_buy--pay_detail--total"
);
const giftconBuyResultHome = document.querySelector(
  ".giftcon_buy--result_home"
);
const giftconBuyPayBtn = document.querySelector(".giftcon_buy--pay_btn");

const { prName, img, price } = JSON.parse(localStorage.getItem("giftInfo"));
const nowPage = window.location.pathname.slice(23, -5);
const shippingFee = "2,500";

const productPrint = () => {
  giftconBuyProductImg.innerHTML = `<img src="../../${img.slice(
    9,
    img.length
  )}" alt="" />`;
  giftconBuyProductName.innerHTML = `<p>${prName}</p>`;
  giftconBuyProductPrice.innerHTML = `<p>판매가 : ${price}원</p>`;
};

const productPayPrint = () => {
  const moneyTotal =
    parseInt(price.split(",").join("")) +
    parseInt(shippingFee.split(",").join(""));
  const moneyTotlaStr = moneyTotal.toString();
  const moneyTotalArr = [
    moneyTotlaStr.slice(0, moneyTotlaStr.length - 3),
    moneyTotlaStr.slice(moneyTotlaStr.length - 3),
  ];
  giftconBuyPayDetailProductPrice.textContent = `${price}원`;
  giftconBuyPayDetailDelivery.textContent = `${shippingFee}원`;
  giftconBuyPayDetailTotal.textContent = `${moneyTotalArr}원`;
};
window.addEventListener("DOMContentLoaded", () => {
  if (nowPage === "giftcon_buy") {
    productPrint();
    productPayPrint();
  }
});

if (nowPage === "giftcon_buy_result") {
  giftconBuyResultHome.addEventListener("click", () => {
    localStorage.removeItem("giftInfo");
  });
}

window.addEventListener("click", (e) => {
  console.log(e);
});
const gif = document.querySelector(".giftcon_buy--receiver_tel");
console.log(gif);
