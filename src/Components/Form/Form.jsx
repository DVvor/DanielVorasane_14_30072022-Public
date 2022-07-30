import './Form.css'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import DatePickerComponent from '../../Components/DatePicker/DatePickerComponent';
import DatePicker from "react-date-picker";
import { useNavigate } from "react-router-dom"
// import { faSignOut } from '@fortawesome/free-solid-svg-icons'

/**
 * Create a layout with principal component
 * @returns { JSX }
*/

function Form() {
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
    <form action="" className="create-employee-form">
      <label name="first-name">First Name</label>
      <input type="text" id="first-name" onChange={(event) => setFirstName(event.target.value)}/>
      
      <label name="last-name">Last Name</label>
      <input type="text" id="last-name" onChange={(event) => setLastName(event.target.value)} />

      <label name="date-of-birth">Date of Birth</label>
      {/* <input id="date-of-birth" type="text" onChange={(event) => setDateOfBirth(event.target.value)}/> */}
      <DatePickerComponent />

      <label name="start-date">Start Date</label>
      {/* <input id="start-date" type="text" onChange={(event) => setStartDate(event.target.value)}></input> */}
      <DatePickerComponent />

      <div className="address">
        <p className='title-adress'>Address</p>

        <label name="street">Street</label>
        <input id="street" type="text" onChange={(event) => setStreet(event.target.value)}/>

        <label name="city">City</label>
        <input id="city" type="text" onChange={(event) => setCity(event.target.value)}/>

        <label name="state">State</label>
        {/* <input name="state" id="state" placeholder='à faire menu déroulant' onChange={(event) => setStateOfcity(event.target.value)}></input> */}
        {/* <SelectAState /> */}

        <label name="zip-code">Zip Code</label>
        <input id="zip-code" type="number" onChange={(event) => setZipCode(event.target.value)}></input>
      </div>

      <label name="department" className='department-label'>Department</label>
      <select name="department" className="department-select" value={department} onChange={(event) => setDepartment(event.target.value)}>
          <option value="Sales">Sales</option>
          <option value="Marketing">Marketing</option>
          <option value="Engineering">Engineering</option>
          <option value="Human Resources">Human Resources</option>
          <option value="Legal">Legal</option>
      </select>

      <div className='button-bl'>
        <button className='button-save' onClick={handlesubmit} >Save</button>
      </div>
      
    </form>

  )
}

export default Form