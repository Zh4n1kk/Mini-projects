import { useNavigate } from "react-router";
import useStoreContact from "../../store/store";

const AddNew = () => {
    const {emailInput, imgInput, nameInput, phoneInput, setEmail, setImg, setName, setPhone, postContact, actionType, patchContact} = useStoreContact()
    const navigate = useNavigate()

	return (
		<div className="container">
			{actionType === "add" ? <p>Add new contact</p> : actionType === 'edit' ? <p>Edit Contact</p> : ''}
			<div className="flex">
				<div className="w-[200px]">
					<p className="h-10">Name: </p>
					<p className="h-10">Phone: </p>
					<p className="h-10">Email: </p>
					<p className="h-10">Photo (URL): </p>
				</div>
				<div className="flex flex-col">
					<input value={nameInput} onChange={(e) => setName(e.target.value)} type="text" className="border-b h-10" placeholder="Name" />
					<input value={phoneInput} onChange={(e) => {
						const value = e.target.value
						if(isNaN(Number(value))) return
						setPhone(e.target.value)}} type="text" className="border-b h-10" placeholder="Phone" />
					<input value={emailInput} onChange={(e) => setEmail(e.target.value)} type="text" className="border-b h-10" placeholder="Email" />
					<input value={imgInput} onChange={(e) => setImg(e.target.value)} type="text" className="border-b h-10" placeholder="Photo (URL)" />
				</div>
			</div>
                <img src={imgInput ? imgInput : 'https://avatars.githubusercontent.com/u/90469966?s=64&v=4'} className="w-[80px] h-[80px] object-cover"/> 
            <div className="flex gap-2 mt-3">
            <button onClick={() => {
				if(emailInput.length === 0 || imgInput.length === 0 || nameInput.length === 0 || phoneInput.length === 0) return
				if(actionType === 'add') {
					postContact()
					navigate('/')
				} else if (actionType === 'edit') {
					patchContact()
					navigate('/')
				}
			}}>Save</button>
            <button onClick={() => navigate('/')}>Back to contacts</button>
            </div>
		</div>
	);
};

export default AddNew;
