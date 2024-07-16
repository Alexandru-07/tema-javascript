function divisibleFunc() {
  const userInputNumber = document.getElementById("d-check-input-1");
  const outPutText = document.getElementById("d-output-txt");
  const theNumber = userInputNumber.value;
  /* Variables - End */

  if (theNumber !== "") {
    userInputNumber.style.boxShadow = "none";

    if (theNumber % 10 == 0) {
      outPutText.textContent =
        `Numarul ${theNumber} este divizibil cu 10 -> ` + true;
      userInputNumber.style.boxShadow = "0 0 15px green";
      setTimeout(function () {
        userInputNumber.style.boxShadow = "none";
        console.log("DEBUG");
      }, 1000);
    } else {
      outPutText.textContent =
        `Numarul ${theNumber} nu este divizibil cu 10 -> ` + false;
      userInputNumber.style.boxShadow = "0 0 15px red";
      setTimeout(function () {
        userInputNumber.style.boxShadow = "none";
        console.log("DEBUG");
      }, 1000);
    }
  } else {
    outPutText.textContent = "Introdu un numar!";
    userInputNumber.style.boxShadow = "0 0 15px red";
    setTimeout(function () {
      userInputNumber.style.boxShadow = "none";
    }, 1000);
  }
}

function divisibleFuncEx() {
  const elementCtn = document.getElementById("inp-b-cfg");
  const userInputNumberEx = document.getElementById("d-check-input-ex-1");
  const userInputNumberExSec = document.getElementById("d-check-input-ex-2");
  const outPutExText = document.getElementById("d-output-ex-txt");
  const theNumberEx = userInputNumberEx.value;
  const theNumberExSec = userInputNumberExSec.value;
  /* Variables - End */

  if (theNumberEx && theNumberExSec !== "") {
    userInputNumberEx.style.boxShadow = "none";
    userInputNumberExSec.style.boxShadow = "none";
    if (
      theNumberEx % theNumberExSec == 0 ||
      theNumberExSec % theNumberEx == 0
    ) {
      console.log(
        `Numarul ${theNumberEx} este divizibil cu ${theNumberExSec} -> ` + true
      );
      outPutExText.textContent =
        `Numarul ${theNumberEx} este divizibil cu numarul ${theNumberExSec} -> ` +
        true;
      userInputNumberEx.style.boxShadow = "0 0 15px green";
      userInputNumberExSec.style.boxShadow = "0 0 15px green";

      setTimeout(function () {
        userInputNumberExSec.style.boxShadow = "none";
        userInputNumberEx.style.boxShadow = "none";
        console.log("DEBUG");
      }, 1000);
    } else {
      console.log(
        `Numarul ${theNumberEx} nu este divizibil cu ${theNumberExSec} -> ` +
          false
      );
      outPutExText.textContent =
        `Numarul ${theNumberEx} nu este divizibil cu numarul ${theNumberExSec} ` +
        false;

      userInputNumberEx.style.boxShadow = "0 0 15px red";
      userInputNumberExSec.style.boxShadow = "0 0 15px red";

      setTimeout(function () {
        userInputNumberExSec.style.boxShadow = "none";
        userInputNumberEx.style.boxShadow = "none";
        console.log("DEBUG");
      }, 1000);
    }
  } else {
    outPutExText.textContent = "Introdu doua numere!";
    userInputNumberEx.style.boxShadow = "0 0 15px red";
    userInputNumberExSec.style.boxShadow = "0 0 15px red";
    setTimeout(function () {
      userInputNumberEx.style.boxShadow = "none";
      userInputNumberExSec.style.boxShadow = "none";
    }, 1000);
  }
}
function tellFortune(N, Z, Y, X) {
  const outPutFrtn = document.getElementById("d-output-frtn");
  /* Variables - End */
  console.log(
    `Vei fi un ${X}, in ${Y}, casatorit cu ${Z} si vei avea ${N} copii.`
  );
  outPutFrtn.textContent = `"Vei fi un ${X}, in ${Y}, casatorit cu ${Z} si vei avea ${N} copii."`;
}
tellFortune(2, "Annelise", "Japonia", "Programator");

function switchDays() {
  const userInputDay = document.getElementById("d-check-input-3");
  const userInputStyleBox = (userInputDay.style.boxShadow = "0 0 15px green");
  const userInputDayNum = Number(
    document.getElementById("d-check-input-3").value
  );
  const outPutDayNum = document.getElementById("d-output-dday");
  /* Variables - End */
  switch (userInputDayNum) {
    case 1:
      console.log("Luni");
      outPutDayNum.textContent = "Ziua: Luni";
      userInputStyleBox;
      setTimeout(function () {
        userInputDay.style.boxShadow = "none";
      }, 1000);
      break;
    case 2:
      console.log("Marti");
      outPutDayNum.textContent = "Ziua: Marti";
      userInputStyleBox;
      setTimeout(function () {
        userInputDay.style.boxShadow = "none";
      }, 1000);
      break;
    case 3:
      console.log("Miercuri");
      outPutDayNum.textContent = "Ziua: Miercuri";
      userInputStyleBox;
      setTimeout(function () {
        userInputDay.style.boxShadow = "none";
      }, 1000);
      break;
    case 4:
      console.log("Joi");
      outPutDayNum.textContent = "Ziua: Joi";
      userInputStyleBox;
      setTimeout(function () {
        userInputDay.style.boxShadow = "none";
      }, 1000);
      break;
    case 5:
      console.log("Vineri");
      outPutDayNum.textContent = "Ziua: Vineri";
      userInputStyleBox;
      setTimeout(function () {
        userInputDay.style.boxShadow = "none";
      }, 1000);
      break;
    case 6:
      console.log("Sambata");
      outPutDayNum.textContent = "Ziua: Sambata";
      userInputStyleBox;
      setTimeout(function () {
        userInputDay.style.boxShadow = "none";
      }, 1000);
      break;
    case 7:
      console.log("Duminica");
      outPutDayNum.textContent = "Ziua: Duminica";
      userInputStyleBox;
      setTimeout(function () {
        userInputDay.style.boxShadow = "none";
      }, 1000);
      break;
    default:
      outPutDayNum.textContent =
        "Trebuie sa introduci un numar care corespunde cu zilele saptamanii.";
      userInputDay.style.boxShadow = "0 0 15px red";
      console.log("DEBUG!");
      setTimeout(function () {
        userInputDay.style.boxShadow = "none";
      }, 1000);
  }
}
