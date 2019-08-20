var moment = require('moment');

export const loopThroughDates = (startDate: any, endDate: any) => {
  const datesObj: any = {};
  for (
    let m = moment(startDate);
    m.diff(endDate, 'days') <= 0;
    m.add(1, 'days')
  ) {
    datesObj[m.format('DD-MM-YYYY')] = 0;
  }
  return datesObj;
};
