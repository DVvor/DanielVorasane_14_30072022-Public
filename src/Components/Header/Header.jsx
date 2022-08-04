import './Header.css'

import logo from '../../Assets/logo-wh.jpeg'
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";
import { formIsOpen } from '../../LocalStorage/LocalStorage';

function Header() {
  // const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate() // permet d'utiliser une fonction de redirection - naviguer entre les pages

  function handleClick() {
    // alert('test')
    // setIsOpen(true)
    // console.log(isOpen)
    navigate(`/create-employee`)  // Lien url create employee
    formIsOpen('opened', true)
  }
  function backHome() {
    formIsOpen('opened', false)
  }

  return (
    <header className='header'>
          <Link to="/home" onClick={backHome}>
            <img alt='logo wealth health' className='logo' src={logo} />
          </Link>
          <h1 className='title'>WEALTH HEALTH</h1> 
          <button className='btn-create' onClick={handleClick}>Create employee</button>
    </header>

  )
  
}


export default Header