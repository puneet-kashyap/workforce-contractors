var moment = require('moment');
import firebase from '../services/firebase.service';

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

export const timestampToDate = (date: any) => {
  const formattedDate = new firebase.timeStamp(
    date._seconds,
    date._nanoseconds
  ).toDate();
  return moment(formattedDate).format('DD-MM-YYYY');
};
