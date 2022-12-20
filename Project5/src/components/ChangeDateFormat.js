export const changeDateFormat = (oldDate) => {
  const newDate = `${oldDate.slice(8, 10)}/${oldDate.slice(5, 7)}/${oldDate.slice(0, 4)}`;
  return newDate;
};
export const changeDateFormatToOld = (oldDate) => {
  const newDate = `${oldDate.slice(6, 10)}-${oldDate.slice(3, 5)}-${oldDate.slice(0, 2)}`;
  return newDate;
};
