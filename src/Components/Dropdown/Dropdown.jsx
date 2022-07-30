import './Dropdown.css'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';


function ListDropdown({options}) {

  const defaultOption = options[0];

  return (
    <>
      <Dropdown options={options} value={defaultOption} />
    </>

  )
  
}


export default ListDropdown