import React, { Component } from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = BigCalendar.momentLocalizer(moment);

class Calendar extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }}>
        <BigCalendar
          events={[
            {
              title: 'My event',
              allDay: true,
              start: new Date(),
              end: new Date(),
            }
          ]}
          step={60}
          showMultiDayTimes
          defaultDate={new Date()}
          localizer={localizer}
          popup
          onSelectEvent={event => alert(event.title)}
        />
      </div>
    );
  }
}

export default Calendar;
