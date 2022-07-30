import './DatePickerComponent.css'
import React from 'react';
import { useState } from 'react';
import DatePicker from 'react-date-picker';
// import DatePicker from 'react-date-picker/dist/entry.nostyle'

function DatePickerComponent() {
  const [value, onChange] = useState(new Date());
  console.log(value)
  return (
    <div className='date-picker'>
      <DatePicker 
      onChange={onChange}
      value={value} 
      clearIcon={null}
      calendarIcon={null}
      format="dd-MM-yyyy"
      />
    </div>
  )
}

export default DatePickerComponent