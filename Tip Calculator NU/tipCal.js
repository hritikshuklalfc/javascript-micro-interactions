let billAmmountEl = document.getElementById("billAmount");
let percentageTipEl = document.getElementById("percentageTip");
let tipAmountEl = document.getElementById("tipAmount");
let totalAmountEl = document.getElementById("totalAmount");
let errorMessageEl = document.getElementById("errorMessage");

function calculateTip() {
  let billAmt = billAmmountEl.value;
  let perTip = percentageTipEl.value;

  if (billAmt === "" || perTip === "") {
    errorMessageEl.textContent = "Please enter a valid input";
  } else {
    errorMessageEl.textContent = "";

    let tipAmt = (perTip / 100) * billAmt;
    tipAmountEl.value = tipAmt;
    totalAmountEl.value = parseInt(billAmt) + parseInt(tipAmt);
  }
}
