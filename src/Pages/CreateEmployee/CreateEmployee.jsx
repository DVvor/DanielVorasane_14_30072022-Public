import './CreateEmployee.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import DatePickerComponent from '../../Components/DatePicker/DatePickerComponent';
import DatePicker from "react-date-picker";
import { useNavigate } from "react-router-dom"
import Form from '../../Components/Form/Form';

// import { faSignOut } from '@fortawesome/free-solid-svg-icons'

/**
 * Create a layout with principal component
 * @returns { JSX }
*/

function CreateEmployee() {
  // const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate() // permet d'utiliser une fonction de redirection - naviguer entre les pages

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [dateOfBirth, setDateOfBirth] = useState();
  const [startDate, setStartDate] = useState();
  const [street, setStreet] = useState();
  const [city, setCity] = useState();
  const [stateOfcity, setStateOfcity] = useState();
  const [zipCode, setZipCode] = useState();
  const [department, setDepartment] = useState('');

  function handlesubmit(event) {
    event.preventDefault()
    console.log(`firstName: ${firstName}`)
    console.log(`lastName: ${lastName}`)
    console.log(`dateOfBirth: ${dateOfBirth}`)
    console.log(`startDate: ${startDate}`)
    console.log(`street: ${street}`)
    console.log(`city: ${city}`)
    console.log(`stateOfcity: ${stateOfcity}`)
    console.log(`zipCode: ${zipCode}`)
    console.log(`department: ${department}`)

  }

  function closeForm() {
    navigate(`/home`)  // Lien url home
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