import { useNavigate } from 'react-router'
import './Header.css'
import useStoreContact from '../../store/store'

const Header = () => {
  const {setActionType, clearInputs} = useStoreContact()
  const navigate = useNavigate()

  return (
    <div className="header z-10">
      <div className='w-[70%] m-auto flex justify-between items-center'>
    <div className='text-2xl font-bold'>Contacts</div>
      <div className="flex gap-3">
        <button onClick={() => {clearInputs(); setActionType("add");navigate('/new-')}}>Add new contact</button>
      </div>
      </div>
    </div>
  )
}

export default Header