import './Header.css'

import logo from '../../Assets/logo-wh.jpeg'
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom";

function Header() {
  const navigate = useNavigate() 

  function handleClick() {
    navigate(`/create-employee`)
  }
  function backHome() {
    navigate(`/home`)
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