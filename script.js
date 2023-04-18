"use strict";

const labelDay = document.querySelector(".label__day");
const dayInput = document.getElementById("day__input");
const labelMonth = document.querySelector(".label__month");
const monthInput = document.getElementById("month__input");
const labelYear = document.querySelector(".label__year");
const yearInput = document.getElementById("year__input");
const outputYear = document.querySelector(".output__year-input");
const outputMonth = document.querySelector(".output__month-input");
const outputDay = document.querySelector(".output__day-input");
const allInputs = document.querySelectorAll(".input");
const invalidDay = document.querySelector(".error__day");
const invalidMonth = document.querySelector(".error__month");
const invalidYear = document.querySelector(".error__year");
const requiredDay = document.querySelector(".error__required__day");
const requiredMonth = document.querySelector(".error__required__month");
const requiredYear = document.querySelector(".error__required__year");
const calcLogo = document.querySelector(".logo");
const result = document.querySelector(".result");

function validateForm() {
  // making sure there are no letters
  // this is the day input

  // this is for the month input
  const month = monthInput.value;
  monthInput.value = month.replace(/[^0-9]/g, "");

  // this is for the year input
  const year = yearInput.value;
  yearInput.value = year.replace(/[^0-9]/g, "");
  const now = new Date();
  const nowYear = now.getFullYear();

  const day = dayInput.value;
  dayInput.value = day.replace(/[^0-9]/g, "");
  if (day === "") {
    requiredDay.style.display = "block";
    dayInput.style.border = "1px solid #ff5252";
    labelDay.style.color = "#ff5252";
    // return false;
  } else if (day < 1 || day > 31) {
    invalidDay.style.display = "block";
    requiredDay.style.display = "none";
    dayInput.style.border = "1px solid #ff5252";
    labelDay.style.color = "#ff5252";
    // return false;
  } else {
    invalidDay.style.display = "none";
    requiredDay.style.display = "none";
    dayInput.style.border = "1px solid #1414143b";
    labelDay.style.color = "initial";
  }

  if (month === "") {
    requiredMonth.style.display = "block";
    monthInput.style.border = "1px solid #ff5252";
    labelMonth.style.color = "#ff5252";
    // return false;
  } else if (month < 1 || month > 12) {
    invalidMonth.style.display = "block";
    requiredMonth.style.display = "none";
    monthInput.style.border = "1px solid #ff5252";
    labelMonth.style.color = "#ff5252";
    // return false;
  } else {
    invalidMonth.style.display = "none";
    requiredMonth.style.display = "none";
    monthInput.style.border = "1px solid #1414143b";
    labelMonth.style.color = "initial";
  }

  if (year === "") {
    requiredYear.style.display = "block";
    yearInput.style.border = "1px solid #ff5252";
    labelYear.style.color = "#ff5252";
    return false;
  } else if (year > nowYear) {
    invalidYear.style.display = "block";
    requiredYear.style.display = "none";
    yearInput.style.border = "1px solid #ff5252";
    labelYear.style.color = "#ff5252";
    return false;
  } else if (year.length !== 4) {
    invalidYear.style.display = "block";
    requiredYear.style.display = "none";
    yearInput.style.border = "1px solid #ff5252";
    labelYear.style.color = "#ff5252";
    return false;
  } else {
    invalidYear.style.display = "none";
    requiredYear.style.display = "none";
    yearInput.style.border = "1px solid #1414143b";
    labelYear.style.color = "initial";
  }
  const dob = new Date(year, month - 1, day);

  if (dob > now) {
    result.textContent = "Please enter a date in the past.";
    return false;
  } else {
    result.style.display = "none";
  }

  const daysInMonth = new Date(year, month, 0).getDate();
  if (day > daysInMonth) {
    invalidDay.style.display = "block";
    return false;
  } else {
    invalidDay.style.display = "none";
  }

  const ageInMs = now - dob;
  console.log(ageInMs);
  const ageInYears = Math.floor(ageInMs / 31536000000);

  const ageInMonths = Math.floor((ageInMs % 31536000000) / (30.44 * 86400000));
  const ageInDays = Math.floor(
    ((ageInMs % 31536000000) % (30.44 * 86400000)) / 86400000
  );
  // const ageInMonths = Math.floor((ageInMs % 31536000000) / 2628000000);
  // const ageInDays = Math.floor((ageInMs % 2628000000) / 86400000);

  outputYear.textContent = ageInYears;
  outputMonth.textContent = ageInMonths;
  outputDay.textContent = ageInDays;
}

calcLogo.addEventListener("click", validateForm);

// dayInput.addEventListener("input", function (e) {
//   const day = dayInput.value;
//   dayInput.value = day.replace(/[^0-9]/g, "");

//   if (day < 1 || day > 31) {
//     invalidDay.style.display = "block";
//     dayInput.style.border = "1px solid #ff5252";
//     labelDay.style.color = "#ff5252";

//   } else if (day === "") {
//     invalidDay.style.display = "none";
//     requiredDay.style.display = "block";
//     dayInput.style.border = "1px solid #ff5252";
//     labelDay.style.color = "#ff5252";
//   } else {
//     invalidDay.style.display = "none";
//     requiredDay.style.display = "none";
//     dayInput.style.border = "1px solid #1414143b";
//     labelDay.style.color = "initial";
//   }
// });
// });
// Get the input values

// Check if any field is empty
// dayInput.addEventListener("input", function (e) {
//   const inputValue = e.target.value;
//   e.target.value = inputValue.replace(/[^0-9]/g, "");
// if (!/^[0-9]+$/.test(inputValue)) {
//   console.log("hi");
//   // Display error message or perform other error handling
// }
// });

// if (day === "") {
//   requiredDay.style.display = "block";
//   dayInput.style.border = "1px solid #ff5252";
//   labelDay.style.color = "#ff5252";
//   return false;
// } else if (!/^[0-9]+$/.test(day)) {
//   day = day.replace(/[^0-9]/g, "");

//   requiredDay.style.display = "none";
//   invalidDay.style.display = "block";
//   dayInput.style.border = "1px solid #ff5252";
//   labelDay.style.color = "#ff5252";
//   return false;
// } else {
//   requiredDay.style.display = "none";
// }
// });

// if (month === "") {
//   requiredMonth.style.display = "block";
// }

// if (year === "") {
//   requiredYear.style.display = "block";
// }
// Check if the day number is between 1-31
// if (day < 1 || day > 31) {
//   alert("Invalid day number. Please enter a number between 1-31.");
//   return false;
// }

// // Check if the month number is between 1-12
// if (month < 1 || month > 12) {
//   alert("Invalid month number. Please enter a number between 1-12.");
//   return false;
// }

// // Check if the year is in the future
// const currentYear = new Date().getFullYear();
// if (year > currentYear) {
//   alert("Invalid year. Please enter a year in the past.");
//   return false;
// }

// // Check if the date is valid
// const date = new Date(year, month - 1, day);
// if (
//   date.getMonth() + 1 != month ||
//   date.getDate() != day ||
//   date.getFullYear() != year
// ) {
//   alert("Invalid date. Please enter a valid date.");
//   return false;
// }

// return true;
// }

/*
monthInput.addEventListener("input", function () {
  if (monthInput.value < 1 || monthInput.value > 12) {
    console.log("no");
  } else {
    console.log("yes");
  }
});

dayInput.addEventListener("input", function () {
  if (dayInput.value < 1 || dayInput.value > 31) {
    console.log("no");
  } else {
    console.log("yes");
  }
});

const calcAge = function () {
  const day = dayInput.value;
  const month = monthInput.value.trim();
  const year = yearInput.value.trim();

  // const now = new Date();
  // // console.log(year, month - 1, day);
  // const dob = new Date(year, month - 1, day);
  // console.log(now);
  // console.log(dob);

  // const timeDiff = Math.abs(now - dob);
  // const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  // const monthsDiff = Math.floor(daysDiff / 30);
  // const yearsDiff = Math.floor(daysDiff / 365);

  // const months = monthsDiff % 12;
  // const days = yearsDiff % 30;

  // console.log(yearsDiff);
  // console.log(months);
  // console.log(days);
  // day input

  dayInput.addEventListener("input", function () {
    if (!isNaN(day)) {
      invalidDay.style.display = "block";
      return false;
    } else {
      invalidDay.style.display = "none";
    }
  });

  // monthInput.addEventListener("input", function () {
  //   if (month < 3) {
  //   }
  // });
};

// calcLogo.addEventListener("click", calcAge);

// const now = new Date();
// const dob = new Date(2002, 25, 25).getTime();

// const diffTime = Math.abs(now - dob);
// const diffdays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
// const diffmonths = Math.floor(diffdays / 30);
// const diffyears = Math.floor(diffdays / 365);

// const months = diffmonths % 12;
// const days = diffyears % 30;

// console.log(`you are ${diffyears} years, ${months} months, ${days} days old`);
*/
