import * as React from 'react';
import Calendar from '@toast-ui/react-calendar';
import 'tui-calendar/dist/tui-calendar.css';
import Typography from '../assets/Typography';

// If you use the default popups, use this.
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';

const calendars = [
    {
      id: '0',
      name: 'Private',
      bgColor: '#9e5fff',
      borderColor: '#9e5fff'
    },
  ];
  const templates = {

    weekDayname: schedule => {
      console.log("weekDayname", schedule);
      return "<Typography>" + schedule.dayName +"</Typography>";
    }
  };

export default function TimeTable({originalData}) {
    
    return (
        <Calendar
        // ...
        calendars={calendars}
        useDetailPopup={false}
        useCreationPopup={false}
        unselectable={true}
        isReadOnly={true}
        disableClick={true}
        disableDblClick={true}
        taskView={false}
        scheduleView={['time']}
        template={templates}
        schedules={[
            {
              id: '1',
              calendarId: '0',
              title: 'TOAST UI Calendar Study',
              category: 'time',
              dueDateClass: '',
              start: Date.now(),
              end: Date.now() + 6000000
            },
        ]}
      />
    );
}
  