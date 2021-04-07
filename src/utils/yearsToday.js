export default function yearsToday(date) {
  const pastDate = new Date(date).getTime();
  const todayDate = new Date().getTime();
  const differMilliseconds = todayDate - pastDate;

  const yearsOld = differMilliseconds / 1000 / 60 / 60 / 24 / 30 / 12;
  return Math.floor(yearsOld);
}
