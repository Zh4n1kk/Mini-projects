type Props = {
    img: string
    name: string
    price: string
    edit: () => void
    deleteEl: () => void
}

const Card = ({img, edit, name, price, deleteEl}: Props) => {

  return (
    <div className="flex items-center border-1 justify-between p-2">
        <div className="flex items-center w-110 gap-3">
            <img src={img} className="w-20 h-20 object-contain"/>
            <div className="font-semibold text-[20px]">{name}</div>
        </div>
        <div className="flex gap-3 text-[16px] items-center">
            <p>{price} KZT</p>
            <a className="cursor-pointer" onClick={edit}>EDIT</a>
            <a className="cursor-pointer" onClick={deleteEl}>DELETE</a>
        </div>
    </div>
  )
}

export default Card