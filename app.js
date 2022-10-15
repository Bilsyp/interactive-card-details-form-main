const cardNumber = document.querySelector("#card-no");
const cardName = document.querySelector("#card-name");
const cardDate = document.querySelector("#MMYY");
const inputName = document.getElementById("name");
const inputNumber = document.getElementById("number");
const inputMM = document.getElementById("MM");
const inputYY = document.getElementById("YY");
const inputCVC = document.getElementById("CVC");
const submit = document.getElementById("submit");
const form = document.querySelector("form");

submit.addEventListener("click", (e) => {
  e.preventDefault();
});
console.log(check("sadw21212"));

function check(num) {
  const ios = num.replace(/\D/g, "");
  return parseInt(ios);
  //   if (num != Number && mm != Number) {
  //     inputNumber.style.border = "1px solid red";
  //     inputMM.style.border = "1px solid red";
  //   }
}
