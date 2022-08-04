import './ModalMessageValidate.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ModalMessageValidate () {
  const [opened, setOpened] = useState(true);
  const navigate = useNavigate()

  function closeModal() {
    setOpened(false)
    navigate(`/home`)
  }

  if(opened) {
    return (
      <>
            <div className='modal-message'>
              <div className='modal-content'>
                <p className='validate'>Registered!</p>
                <div>The new employee is register</div>
                <button className='btn-validate' onClick={closeModal}>close</button>
              </div>
            </div>
      </>
  
    )
  }
}

export default ModalMessageValidate