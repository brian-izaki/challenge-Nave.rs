function monthsToday(date) {
  const pastDate = new Date(date);
  const todayDate = new Date();

  const isActualYear = pastDate.getFullYear() === todayDate.getFullYear();
  if (isActualYear) {
    return Math.abs((pastDate.getMonth() - todayDate.getMonth()) + 1);
  }

  const monthsPastYear = 11 - pastDate.getMonth();
  const calcMonthsBetweenYear = (monthsPastYear + todayDate.getMonth()) + 1;
  const hasMoreThan12 = calcMonthsBetweenYear >= 12;
  return hasMoreThan12 ? calcMonthsBetweenYear - 12 : calcMonthsBetweenYear;
}

function yearsToday(date) {
  const pastDate = new Date(date).getTime();
  const todayDate = new Date().getTime();
  const differMilliseconds = todayDate - pastDate;

  const yearsOld = differMilliseconds / 1000 / 60 / 60 / 24 / 30 / 12;
  return Math.floor(yearsOld);
}

function validDate(date, isToValueInput = false) {
  const regexDate = /(\d{4})|(\d{2})/g;
  const [year, month, day] = date.match(regexDate);

  return !isToValueInput
    ? `${day}/${month}/${year}`
    : `${year}-${month}-${day}`;
}

export {
  monthsToday,
  yearsToday,
  validDate,
};
