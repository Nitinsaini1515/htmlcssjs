const dob = document.querySelector(".dob");
const targetDate = document.querySelector(".targetDate");
const calcAge = document.querySelector(".calcAge");
const result = document.querySelector(".result");
const yourLifeTimeReuslt = document.querySelector(".yourLifeTimeReuslt");

calcAge.addEventListener("click", () => {
  if (dob.value == "" || targetDate.value == "") {
    alert("Enter some valid date");
    return;
  }
  const oldDate = new Date(dob.value);
  console.log(oldDate);
  const tarDate = new Date(targetDate.value);
  console.log(tarDate);

  if (oldDate > tarDate) {
    alert("Enter an valid date");
    return;
  }

  let years = tarDate.getFullYear() - oldDate.getFullYear();
  let months = tarDate.getMonth() - oldDate.getMonth();
  let days = tarDate.getDate() - oldDate.getDate();

  // const currDate = new Date();

  const difference = tarDate - oldDate;
  const myYears = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));
  const myMonths = Math.floor(difference / (1000 * 60 * 60 * 24 * 30.4375));
  const myWeeks = Math.floor(difference / (1000 * 60 * 60 * 24 * 7));
  const myDays = Math.floor(difference / (1000 * 60 * 60 * 24));
  const myHours = Math.floor(difference / (1000 * 60 * 60));
  const myMinutes = Math.floor(difference / (1000 * 60));
  const mySeconds = Math.floor(difference / 1000);

  result.textContent = `${years} Years ${months} Months ${days} Days `;

  yourLifeTimeReuslt.textContent = `Total Years ${myYears} | Total Months  ${myMonths} | Total weeks ${myWeeks} Total days ${myDays} | 
  Total Hours ${myHours} | Total Minutes ${myMinutes}  | Total Seconds ${mySeconds} `;
});
