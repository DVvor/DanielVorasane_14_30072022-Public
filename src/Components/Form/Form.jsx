import './Form.css'
import { useState } from 'react';
import DatePickerComponent from '../../Components/DatePicker/DatePickerComponent';
import ListDropdown from '../ListDropdown/ListDropdown';
import { UsaStates } from 'usa-states';
import Modal from 'react-modal';
import { addItem, formIsOpen } from '../../LocalStorage/LocalStorage';
import { useNavigate } from "react-router-dom"

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
  const navigate = useNavigate() // permet d'utiliser une fonction de redirection - naviguer entre les pages
  const [messageValidate, setmessageValidate] = useState(false);

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

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '5px',
      width: '600px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: 'rgb(24,29,31)',
      color: 'white',
      alignItems: 'center',
      gap: '10px'
    },
  };
  console.log(`stateOfcity: ${stateOfcity}`)
  console.log(`department: ${department}`)

  function handleSubmit(event) {
    event.preventDefault()
    // console.log(`firstName: ${firstName.length}`)
    // console.log(`lastName: ${lastName}`)
    // console.log(`dateOfBirth: ${dateOfBirth}`)
    // console.log(`startDate: ${startDate}`)
    // console.log(`street: ${street}`)
    // console.log(`city: ${city}`)
    // console.log(`zipCode: ${zipCode}`)
    console.log(`stateOfcity: ${stateOfcity}`)
    console.log(`department: ${department}`)

    if(
      firstName.length <= 2 ||
      lastName.length <= 2 ||
      !validInput.test(firstName) ||
      !validInput.test(lastName) ||
      // dateOfBirth.length === 0 ||
      // startDate.length === 0 ||
      street.length === 0 ||
      city.length === 0 ||
      zipCode.length !== 5 
      ){
        // setError(true)
        alert('error ou incomplet')
      } else {
        // setError(false)
        addItem('list', dataEmployee)
        openModal()
      }
  }
  function openModal() {
    // event.preventDefault()
    setmessageValidate(true);
  }
  function closeModal() {
    setmessageValidate(false)
    formIsOpen ('opened', false)
    navigate(`/home`)  // Lien url home
  }

  Modal.setAppElement('#root');

  return (
    <>
      <form action="" className="create-employee-form">
        <label name="first-name">First Name</label>
        <input type="text" id="first-name" onChange={(event) => setFirstName(event.target.value)}/>
        
        <label name="last-name">Last Name</label>
        <input type="text" id="last-name" onChange={(event) => setLastName(event.target.value)} />

        <label name="date-of-birth">Date of Birth</label>
        {/* <input id="date-of-birth" type="text" onChange={(event) => setDateOfBirth(event.target.value)}/> */}
        <DatePickerComponent onchange={setDateOfBirth}/>
        
        <label name="start-date">Start Date</label>
        {/* <input id="start-date" type="text" onChange={(event) => setStartDate(event.target.value)}></input> */}
        <DatePickerComponent onchange={setStartDate}/>

        <div className="address">
          <p className='title-adress'>Address</p>

          <label name="street">Street</label>
          <input id="street" type="text" onChange={(event) => setStreet(event.target.value)}/>

          <label name="city">City</label>
          {/* <input id="city" type="text" onChange={(event) => setCity(event.target.value)}/> */}
          <input id="city" type="text" onChange={(event) => setCity(event.target.value)}/>

          <label name="state">State</label>
          {/* <input name="state" id="state" placeholder='à faire menu déroulant' onChange={(event) => setStateOfcity(event.target.value)}></input> */}
          <ListDropdown options={optionsUsStates} onchange={setStateOfcity}/>

          <label name="zip-code">Zip Code</label>
          <input id="zip-code" type="number" onChange={(event) => setZipCode(event.target.value)}></input>
        </div>

        <label name="department" className='department-label'>Department</label>
        <ListDropdown options={optionsDepartment} onchange={setDepartment}/>

        <div className='button-bl'>
          <button className='button-save' onClick={handleSubmit} >Save</button> 
        </div>
      </form>
      <Modal
      isOpen={messageValidate}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Modal"
    >
      <p className='validate'>Registered!</p>
      <div>The new employee is register</div>
      <button className='btn-validate' onClick={closeModal}>close</button>
    </Modal>
    </>
  )
}

export default Form