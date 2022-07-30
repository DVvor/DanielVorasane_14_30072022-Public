import './Form.css'
import { useState } from 'react';
import DatePickerComponent from '../../Components/DatePicker/DatePickerComponent';
import ListDropdown from '../Dropdown/Dropdown';
import { UsaStates } from 'usa-states';

// import { useNavigate } from "react-router-dom"

// import DatePicker from "react-date-picker";

/**
 * Create a layout with principal component
 * @returns { JSX }
*/

function Form() {

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [dateOfBirth, setDateOfBirth] = useState();
  const [startDate, setStartDate] = useState();
  const [street, setStreet] = useState();
  const [city, setCity] = useState();
  const [stateOfcity, setStateOfcity] = useState();
  const [zipCode, setZipCode] = useState();
  const [department, setDepartment] = useState('');
  
  let validInput = /^[a-zA-ZÀ-ÿ ]+$/ // Regex 
  const [error, setError] = useState(false);

  const optionsDepartment = [
    'Sales', 'Marketing', 'Engineering', 'Human Resources', 'Legal'
  ];

  const usStates = new UsaStates();
  const optionsUsStates = usStates.states.map((state) => state.name);


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
    
    if(!validInput.test(firstName) || 
    !validInput.test(lastName)|| 
    firstName.length === 0 || 
    lastName.length === 0 ||
    // dateOfBirth.length === 0 ||
    // startDate.length === 0 ||
    street.length === 0 ||
    city.length === 0 ||
    stateOfcity.length === 0 ||
    zipCode.length === 0 ||
    department.length === 0) {
      setError(true)
      alert('error ou incomplet')
      } else {
        alert('pas derreur')
        setError(false)
      }
  }

  return (
    <form action="" className="create-employee-form">
      <label name="first-name">First Name</label>
      <input type="text" id="first-name" onChange={(event) => setFirstName(event.target.value)}/>
      
      <label name="last-name">Last Name</label>
      <input type="text" id="last-name" onChange={(event) => setLastName(event.target.value)} />

      <label name="date-of-birth">Date of Birth</label>
      {/* <input id="date-of-birth" type="text" onChange={(event) => setDateOfBirth(event.target.value)}/> */}
      <DatePickerComponent onChange={(event) => setDateOfBirth(event.target.value)} />

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
        <ListDropdown options={optionsUsStates}/>


        <label name="zip-code">Zip Code</label>
        <input id="zip-code" type="number" onChange={(event) => setZipCode(event.target.value)}></input>
      </div>

      <label name="department" className='department-label'>Department</label>
      <ListDropdown options={optionsDepartment}/>

      <div className='button-bl'>
        <button className='button-save' onClick={handlesubmit} >Save</button>
      </div>
      
    </form>

  )
}

export default Form