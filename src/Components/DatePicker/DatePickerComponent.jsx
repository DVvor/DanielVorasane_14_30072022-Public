import './DatePickerComponent.css'
import React from 'react';
import { useState } from 'react';
import DatePicker from 'react-date-picker';
// import DatePicker, {getYear, getMonth, range} from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

function DatePickerComponent({onchange}) {
  const [datePicker, setDatePicker] = useState(new Date());
  
  function handleOnChange(event) {
    setDatePicker(event)
    onchange(event)
  }

  return (
      <DatePicker 
      onChange={handleOnChange}
      value={datePicker} 
      clearIcon={null}
      calendarIcon={null}
      format="dd-MM-yyyy"
      containerStyle={{width: '100%'}}
      />
  )

}

export default DatePickerComponent