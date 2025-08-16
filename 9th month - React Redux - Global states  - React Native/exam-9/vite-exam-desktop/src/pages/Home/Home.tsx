import { useEffect } from "react"
import Card from "../../components/Card/Card"
import useStoreContact from "../../store/store"
import ModalWindow from "../../components/ModalWindow/ModaWindow"
import { useNavigate } from "react-router"
import Spinner from "../../components/Spinner/Spinner"

const Home = () => {
    const { data, fetchContacts, show, setShow, imgInput, emailInput, nameInput, phoneInput, setEmail,setImg,setName,setPhone, setGlobalId, setActionType, deleteContact, loading} = useStoreContact()
    const navigate = useNavigate()

    const openModal = () => {
        setShow()
    }

    useEffect(() => {
        fetchContacts()
    },[])

  return (
      <div>
        {loading ? <Spinner /> : ''}
        <ModalWindow show={show} close={setShow}>
                <div className="flex flex-col gap-5">
                    <div className="flex gap-5 items-center">
                    <img src={imgInput} className="w-40 h-40 object-cover"/>
                    <div className="flex flex-col gap-5">
                        <p>Contact Name: {nameInput}</p>
                        <p>Phone number: {phoneInput}</p>
                        <p>Email: {emailInput}</p>
                    </div>
                    </div>
                    <div className="flex gap-2">
                        <button className="w-[100px]" onClick={() => {setActionType('edit') ;navigate('/new-'); setShow()}}>Edit</button>
                        <button className="w-[100px]" onClick={() => {deleteContact(); setShow(); fetchContacts()}}>Delete</button>
                    </div>
                </div>
        </ModalWindow>
      <div className="container pt-5">
        <div className="flex flex-col gap-5">
        {data ? data.map((el) => {
            return<Card key={el.id} img={el.imgInput} name={el.nameInput} onClick={() => {
                setName(el.nameInput)
                setEmail(el.emailInput)
                setImg(el.imgInput)
                setPhone(el.phoneInput)
                setGlobalId(el.id)
                openModal()
            }}/>
        }): 'No Data'}
        </div>
    </div>
    </div>
  )
}

export default Home