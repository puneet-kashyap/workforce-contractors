import * as moment from 'moment';
import firebase from '../services/firebase.service';

import { DATE } from '../utils/Constants';

const PRODUCTS = 'products';
const AVAILABILITY = 'availability';

const isValidDate = (date: moment.Moment): boolean => {
  return !!date.isAfter();
};

const getProductAvailability = (req: any, next: Function) => {
  const startRentalDate = moment(req.query.from, DATE.FORMAT);
  console.log(startRentalDate)
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
        console.log(dateAbailability)
        availability.push(dateAbailability);
        next(availability);
      })
      .catch(error => {
        console.error(error);
      });
  }
};

export default {
  getProductAvailability
};
