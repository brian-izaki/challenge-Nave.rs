function yearsToday(date) {
  const pastDate = new Date(date).getTime();
  const todayDate = new Date().getTime();
  const differMilliseconds = todayDate - pastDate;

  const yearsOld = differMilliseconds / 1000 / 60 / 60 / 24 / 30 / 12;
  return Math.floor(yearsOld);
}


function validDate(date) {
  const regexDate = /(\d{4})|(\d{2})/g
  const [year, month, day] = date.match(regexDate);

  return `${day}/${month}/${year}`
}

export {
  yearsToday,
  validDate,
}