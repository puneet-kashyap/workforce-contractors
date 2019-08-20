import * as moment from 'moment';
import firebase from '../services/firebase.service';
import { DateRange } from '../interface/Date';
import { loopThroughDates } from '../utils/DateUtil';

import { DATE } from '../utils/Constants';

const PRODUCTS = 'products';
const AVAILABILITY = 'availability';

const isValidDate = (date: moment.Moment): boolean => {
  return !!date.isAfter();
};

const getProductAvailability = (req: any, next: Function) => {
  const startRentalDate = moment(req.query.from, DATE.FORMAT);
  if (isValidDate) {
    firebase.db
      .collection(PRODUCTS)
      .doc(req.params.id)
      .collection(AVAILABILITY)
      .doc(startRentalDate.year().toString())
      .get()
      .then(snapshot => {
        const availability: any = [];
        const data: any = snapshot.data();
        const month = startRentalDate.format('MMMM');
        const dateAbailability = data[month]['12'];
        availability.push(dateAbailability);
        next(availability);
      })
      .catch(error => {
        console.error(error);
      });
  }
};

const getProductRange = (id: string, dates: DateRange, next: any) => {
  const fromDate: moment.Moment = moment(dates.from, 'DD-MM-YYYY');
  const endDate: moment.Moment = moment(dates.to, 'DD-MM-YYYY');
  firebase.db
    .collection(PRODUCTS)
    .doc(id.toString())
    .collection(AVAILABILITY)
    .where('month', '>=', parseInt(fromDate.format('YYYYMM')))
    .where('month', '<=', parseInt(endDate.format('YYYYMM')))
    .get()
    .then(snapshot => {
      let inventory = loopThroughDates(fromDate, endDate);
      if (snapshot.empty) {
        console.log('No matching documents.');
        return inventory;
      }
      snapshot.forEach(doc => {
        console.log(doc.id, '=>', doc.data());
        inventory = { ...inventory, ...doc.data().dates };
      });
      next(inventory);
    });
};

export default {
  getProductRange,
  getProductAvailability
};
