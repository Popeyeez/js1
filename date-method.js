const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
// const seconds = 1;
// const minute = seconds * 60;
// const hour = minute * 60;
// const day = hour * 24;
// const month = day * 30;
// const year = month * 12;

const myDate = new Date();
console.log(myDate);

function calculateEndDate(date) {
  const startDate = new Date("2025-06-09");
  const startYear = startDate.getFullYear;
  const startMonth = startDate.getMonth;
  const startDay = startDate.getDay;
  const holidays = ["2025-7-9", "2025-7-10", "2025-7-11", "2026-1-1"];
  let endDay = startDay + holidays.length;
  if (endDay > 30) {
    endDay = 30 - endDay;
    endMonth++;
  }

  let endMonth = startMonth + 0;
  let endYear;
  if (endMonth > 11) {
    endMonth = 11 - endMonth;
    endYear = startYear + 1;
  } else {
    endYear = startYear;
  }
  return (endDate = (endYear, endMonth, endDay));
}
const endDate = calculateEndDate(startDate);
console.log("EndDate", endDate);
