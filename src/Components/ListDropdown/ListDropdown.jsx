import './ListDropdown.css'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useState } from 'react';

function ListDropdown ({options , onchange }) {
  const [selectedOption, setSelectedOption] = useState();

  const defaultOption = options[0];

  function handleOnChange(event) {
    setSelectedOption(event)
    onchange(event)
  }
  
  return (
    <>
      <Dropdown options={options} value={defaultOption} onChange={handleOnChange} />
    </>

  )
}


export default ListDropdown