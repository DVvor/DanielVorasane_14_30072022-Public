import './ListDropdown.css'
import 'react-dropdown/style.css';
import Dropdown from 'react-dropdown';
import { useState } from 'react';


/**
 * Create a component dropdown with react-dropdown
 * @param { Object } options - List of dropdown options
 * @param { Function } onchange - Retrieve event's option
 * @returns { JSX }
*/

function ListDropdown ({options , onchange }) {
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const defaultOption = selectedOption;

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