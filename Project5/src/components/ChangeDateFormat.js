export const changeDateFormat = (oldDate) => {
  console.log(oldDate);
  const newDate = `${oldDate.slice(8, 10)}/${oldDate.slice(5, 7)}/${oldDate.slice(0, 4)}`;
  return newDate;
};
