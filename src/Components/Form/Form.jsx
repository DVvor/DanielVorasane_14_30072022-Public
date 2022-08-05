import './Form.css'
import { useState } from 'react';
import DatePickerComponent from '../../Components/DatePicker/DatePickerComponent';
import ListDropdown from '../ListDropdown/ListDropdown';
import { UsaStates } from 'usa-states';
import ModalMessageValidate from '../ModalMessageValidate/ModalMessageValidate';
import { useDispatch } from 'react-redux'
import { addEmployee } from '../../Store/Store';
// import Modal from 'react-modal';

/**
 * Create a layout with principal component
 * @returns { JSX }
*/

function Form() {
  const usStates = new UsaStates();
  const optionsUsStates = usStates.states.map((state) => state.name);
  const optionsDepartment = [
    'Sales', 'Marketing', 'Engineering', 'Human Resources', 'Legal'
  ];
  
  // We define a default value for department and state of city
  const stateOfcityOptDefault = {value: optionsUsStates[0], label: optionsUsStates[0]}
  const departmentOptDefault = {value: optionsDepartment[0], label: optionsDepartment[0]}
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [startDate, setStartDate] = useState(new Date());
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [stateOfcity, setStateOfcity] = useState(stateOfcityOptDefault);
  const [zipCode, setZipCode] = useState('');
  const [department, setDepartment] = useState(departmentOptDefault);
  
  const [error, setError] = useState(false);
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const dispatch = useDispatch()

  let validInput = /^[a-zA-ZÀ-ÿ ]+$/ // Regex 

  const dataEmployee = {
    "FirstName": firstName,
    "LastName": lastName,
    "DateofBirth": dateOfBirth.toLocaleDateString("en-US"),
    "StartDate": startDate.toLocaleDateString("en-US"),
    "Street": street,
    "City": city,
    "State": stateOfcity.value,
    "ZipCode": zipCode,
    "Department": department.value,
  }

  function handleSubmit(event) {
    event.preventDefault()
    if(
      firstName.length <= 2 ||
      lastName.length <= 2 ||
      !validInput.test(firstName) ||
      !validInput.test(lastName) ||
      street.length === 0 ||
      city.length === 0 ||
      zipCode.length !== 5 
      ){
        setError(true)
      } else {
        window.scrollTo(0, 0);
        setError(false)
        // addItem('list', dataEmployee)
        setmodalIsOpen(true)
        dispatch(addEmployee(dataEmployee))
      }
  }

  return (
    <>
      <form action="" className="create-employee-form">
        <label name="first-name">First Name</label>
        <input type="text" id="first-name" onChange={(event) => setFirstName(event.target.value)}/>
        
        <label name="last-name">Last Name</label>
        <input type="text" id="last-name" onChange={(event) => setLastName(event.target.value)} />

        <label name="date-of-birth">Date of Birth</label>
        <DatePickerComponent onchange={setDateOfBirth}/>
        
        <label name="start-date">Start Date</label>
        <DatePickerComponent onchange={setStartDate}/>

        <div className="address">
          <p className='title-adress'>Address</p>

          <label name="street">Street</label>
          <input id="street" type="text" onChange={(event) => setStreet(event.target.value)}/>

          <label name="city">City</label>
          <input id="city" type="text" onChange={(event) => setCity(event.target.value)}/>

          <label name="state">State</label>
          <ListDropdown options={optionsUsStates} onchange={setStateOfcity}/>

          <label name="zip-code">Zip Code</label>
          <input id="zip-code" type="number" placeholder='99888' onChange={(event) => setZipCode(event.target.value)}></input>
        </div>

        <label name="department" className='department-label'>Department</label>
        <ListDropdown options={optionsDepartment} onchange={setDepartment}/>

        {error? 
        <p className='error-message'>The form is invalid or incomplete. Please correct all required fields.</p> 
        : ""
        }
        <div className='button-bl'>
          <button className='button-save' onClick={handleSubmit} >Save</button> 
        </div>
      </form>
      { modalIsOpen ? <ModalMessageValidate /> : "" }
    </>
  )
}

export default Form