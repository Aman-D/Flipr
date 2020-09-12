/*
Checking whether the title contains date and filtering them into notifiaction and genral
documents
*/
module.exports = (title) => {
  const dateArray = title.split(" ")[0].split(/[\.\-]/);
  const year = dateArray[2];
  const month = dateArray[1];
  const date = dateArray[0];
  const evalDate = new Date(year, month, date);
  if (evalDate.getTime()) {
    return {
      notification: true,
      notDate: `${date}-${month}-${year}`,
      trimTitle: title.split(" ").slice(1).join(" "),
      orgDate: evalDate,
    };
  } else {
    return {
      notification: false,
      trimTitle: title.split(" ").slice(2).join(" "),
    };
  }
};
