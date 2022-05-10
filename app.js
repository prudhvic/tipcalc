let bill = document.querySelector("#Bill");
let percents = document.querySelectorAll(".amounts button");
let people = document.querySelector("#num-people");
let tipAmount = document.querySelector("#tip");
let customAmount = document.querySelector("#custom-amount");
let totalAmount = document.querySelector("#total");
let resetBtn = document.querySelector(".reset-btn");
let numPeople = 1;
let percent;
customAmount.addEventListener("input", () => {
  removeClasses(percents);
  if (customAmount.value) {
    percent = null;
  }

  calculateTip(percent || customAmount.value);
});
bill.addEventListener("input", () => {
  calculateTip(percent || customAmount.value);
});
people.addEventListener("input", () => {
  console.log("peole");
  calculateTip(percent || customAmount.value);
});
resetBtn.addEventListener("click", reset);
function removeClasses(btns) {
  btns.forEach((btn) =>
    btn.classList.contains("active") ? btn.classList.remove("active") : null
  );
}
percents.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    percent = btn.getAttribute("data-percent");
    removeClasses(percents);
    btn.classList.add("active");
    console.log(btn);
    if (percent) {
      customAmount.value = "";
    }
    calculateTip(percent);
  });
});

function calculateTip(val) {
  console.log("Hi", val, people.value);
  if (bill.value && val) {
    let billAmount = parseInt(bill.value);
    let tipPercent = parseInt(val);
    let tipValue = billAmount * (tipPercent / 100);
    tipAmount.textContent = `${tipValue.toFixed(2)}`;
    if (people.value) {
      console.log("inside");
      totalAmount.textContent = `${(tipValue * people.value).toFixed(2)}`;
    } else {
      totalAmount.textContent = `${(tipValue * 1).toFixed(2)}`;
    }
  }
}
function reset() {
  bill.value = "";
  customAmount.value = "";
  people.value = "";
  tipAmount.textContent = "$0.00";
  totalAmount.textContent = "$0.00";
}
window.addEventListener("load", reset);
