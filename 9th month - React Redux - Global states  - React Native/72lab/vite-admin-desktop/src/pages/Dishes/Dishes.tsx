import { useEffect } from "react";
import Card from "../../components/Card/Card";
import ModalWindow from "../../components/ModalWindow/ModaWindow";
import useStoreAdmin from "../../store/store";
import Spinner from "../../components/Spinner/Spinner";

const Dishes = () => {
	const { show, toggleShow, image, price, name, setPrice, setName, setImage, dishData,  modalType, setModalType, globalId, setGlobalId, loading, fetchDish, deleteDish, handleSubmit, handleSubmitEdit} =
		useStoreAdmin();

  useEffect(() => {
    fetchDish()
  }, [])

	return (
		<>
		{loading === true ? <Spinner /> : ''}
      {modalType === 'add' ? 
      <ModalWindow
				close={() => {
					toggleShow();
				}}
				show={show}
			>
				<p className="font-semibold">Add New Dish</p>
				<div className="flex gap-2 text-[18px]">
					<div className="flex flex-col gap-1">
						<p>Name</p>
						<p>Image Link</p>
						<p>Price</p>
					</div>
					<div className="flex flex-col gap-1">
						<input
							value={name}
							onChange={(e) => setName(e.target.value)}
							className="border-b w-[450px]"
							placeholder="Name"
							type="text"
						/>
						<input
							value={image}
							onChange={(e) => setImage(e.target.value)}
							className="border-b"
							placeholder="Image (URL)"
							type="text"
						/>
						<input
							value={price}
							onChange={(e) => {
								if (!isNaN(Number(e.target.value))) {
									setPrice(e.target.value);
								}
							}}
							className="border-b"
							placeholder="Price"
							type="text"
						/>
					</div>
				</div>
				<button onClick={handleSubmit}>Submit</button>
			</ModalWindow> 

      : modalType === 'edit' ? 

      <ModalWindow
				close={() => {
					toggleShow();
				}}
				show={show}
			>
				<p className="font-semibold">Edit Dish</p>
				<div className="flex gap-2 text-[18px]">
					<div className="flex flex-col gap-1">
						<p>Name</p>
						<p>Image Link</p>
						<p>Price</p>
					</div>
					<div className="flex flex-col gap-1">
						<input
							value={name}
							onChange={(e) => setName(e.target.value)}
							className="border-b w-[450px]"
							placeholder="Name"
							type="text"
						/>
						<input
							value={image}
							onChange={(e) => setImage(e.target.value)}
							className="border-b"
							placeholder="Image (URL)"
							type="text"
						/>
						<input
							value={price}
							onChange={(e) => {
								if (!isNaN(Number(e.target.value))) {
									setPrice(e.target.value);
								}
							}}
							className="border-b"
							placeholder="Price"
							type="text"
						/>
					</div>
				</div>
				<button onClick={() => handleSubmitEdit(globalId)}>Submit</button>
			</ModalWindow> : ''
    }
			
			<div className="w-[70%] m-auto">
				<div className="flex justify-between items-center pb-3 pt-3 m-1">
					<p className="font-bold text-2xl">Dishes</p>
					<button onClick={() => {setModalType('add'); toggleShow()}}>Add New Dish</button>
				</div>
        {dishData.map(el => {
          return(
          <Card
            img={el.image}
            name={el.name}
            price={el.price}
            deleteEl={() => {deleteDish(el.id)}}
            edit={() => {
              setGlobalId(el.id);
              setName(el.name)
              setPrice(el.price)
              setImage(el.image)
              setModalType("edit"); 
              toggleShow()}}
            key={el.id}
          />
          )
        })}
			</div>
		</>
	);
};

export default Dishes;
