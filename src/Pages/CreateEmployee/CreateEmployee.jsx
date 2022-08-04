import './CreateEmployee.css'
// import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
// import DatePickerComponent from '../../Components/DatePicker/DatePickerComponent';
// import DatePicker from "react-date-picker";
import { useNavigate } from "react-router-dom"
import Form from '../../Components/Form/Form';


/**
 * Create a layout with principal component
 * @returns { JSX }
*/

function CreateEmployee() {

  const navigate = useNavigate()

  function closeForm() {
    navigate(`/home`)
  }

  return (
    <div className='create-employee isopen'>
      <div className='modal'>
        <div className='create-employee-title-bl' >
          <h1 className="create-employee-title">HRNET</h1>
          <FontAwesomeIcon icon={faTimesCircle}  className='btn-close-form' onClick={closeForm}/>
        </div>

        <div className="container-h2">
          {/* <a href="">View Current Employees</a> */}
          <h2>CREATE EMPLOYEE</h2>
        </div>
        <Form />
      </div>
    </div>
  )
  }

export default CreateEmployee