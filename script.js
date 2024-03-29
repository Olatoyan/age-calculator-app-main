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

const invalidDetails = function () {
  outputYear.textContent = "- -";
  outputMonth.textContent = "- -";
  outputDay.textContent = "- -";
};

const validateForm = function () {
  // this is the day input
  const day = dayInput.value;
  dayInput.value = dayInput.value.replace(/[^0-9]/g, "");

  if (day === "" || dayInput.value !== day) {
    requiredDay.style.display = "block";
    dayInput.style.border = "1px solid #ff5252";
    labelDay.style.color = "#ff5252";
    // return false;
  } else if (day < 1 || day > 31 || day === 0) {
    invalidDay.style.display = "block";
    requiredDay.style.display = "none";
    dayInput.style.border = "1px solid #ff5252";
    labelDay.style.color = "#ff5252";
    invalidDetails();
    return false;
  } else {
    invalidDay.style.display = "none";
    requiredDay.style.display = "none";
    dayInput.style.border = "1px solid #1414143b";
    labelDay.style.color = "initial";
  }

  // this is for the month input
  const month = monthInput.value;
  monthInput.value = month.replace(/[^0-9]/g, "");
  if (month === "") {
    requiredMonth.style.display = "block";
    monthInput.style.border = "1px solid #ff5252";
    labelMonth.style.color = "#ff5252";
    invalidDetails();

    // return false;
  } else if (month < 1 || month > 12) {
    invalidMonth.style.display = "block";
    requiredMonth.style.display = "none";
    monthInput.style.border = "1px solid #ff5252";
    labelMonth.style.color = "#ff5252";
    invalidDetails();

    return false;
  } else {
    invalidMonth.style.display = "none";
    requiredMonth.style.display = "none";
    monthInput.style.border = "1px solid #1414143b";
    labelMonth.style.color = "initial";
  }

  // this is for the year input
  const year = yearInput.value;
  yearInput.value = year.replace(/[^0-9]/g, "");

  const now = new Date();
  const nowYear = now.getFullYear();
  if (year === "") {
    requiredYear.style.display = "block";
    yearInput.style.border = "1px solid #ff5252";
    labelYear.style.color = "#ff5252";
    invalidDetails();

    return false;
  } else if (year > nowYear) {
    invalidYear.style.display = "block";
    requiredYear.style.display = "none";
    yearInput.style.border = "1px solid #ff5252";
    labelYear.style.color = "#ff5252";
    invalidDetails();

    return false;
  } else if (year.length !== 4) {
    invalidYear.style.display = "block";
    requiredYear.style.display = "none";
    yearInput.style.border = "1px solid #ff5252";
    labelYear.style.color = "#ff5252";
    invalidDetails();

    return false;
  } else {
    invalidYear.style.display = "none";
    requiredYear.style.display = "none";
    yearInput.style.border = "1px solid #1414143b";
    labelYear.style.color = "initial";
  }
  const dob = new Date(year, month - 1, day);

  const daysInMonth = new Date(year, month, 0).getDate();

  if (day > daysInMonth) {
    invalidDay.style.display = "block";
    invalidDetails();

    return false;
  } else {
    invalidDay.style.display = "none";
  }

  let ageInYears = now.getFullYear() - dob.getFullYear();
  let ageInMonths = now.getMonth() - dob.getMonth();
  let ageInDays = now.getDate() - dob.getDate();

  if (ageInDays < 0) {
    ageInMonths--;
    const daysInLastMonth = new Date(
      now.getFullYear(),
      now.getMonth(),
      0
    ).getDate();

    ageInDays += daysInLastMonth;
  }

  if (ageInMonths < 0) {
    ageInYears--;
    ageInMonths += 12;
  }

  if (dob.getTime() > now.getTime()) {
    result.style.display = "block";
    invalidDetails();
    return false;
  } else {
    result.style.display = "none";
  }

  // outputYear.textContent = ageInYears;
  // outputMonth.textContent = ageInMonths;
  // outputDay.textContent = ageInDays;
  // Display age values using counting animation
  startCountingAnimation(ageInYears, outputYear);
  startCountingAnimation(ageInMonths, outputMonth);
  startCountingAnimation(ageInDays, outputDay);
};

const startCountingAnimation = (target, outputElement) => {
  let current = 0;
  const interval = setInterval(() => {
    if (current <= target) {
      outputElement.textContent = current;
      current++;
    } else {
      clearInterval(interval);
    }
  }, 50);
};

// making sure there are no letters
dayInput.addEventListener("input", function () {
  const day = dayInput.value;
  dayInput.value = dayInput.value.replace(/[^0-9]/g, "");
});
monthInput.addEventListener("input", function () {
  const month = monthInput.value;
  monthInput.value = month.replace(/[^0-9]/g, "");
});
yearInput.addEventListener("input", function () {
  const year = yearInput.value;
  yearInput.value = year.replace(/[^0-9]/g, "");
});

calcLogo.addEventListener("click", validateForm);
