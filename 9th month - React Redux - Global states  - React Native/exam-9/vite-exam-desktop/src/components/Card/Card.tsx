type Props = {
    img: string
    name: string
    onClick: () => void
}

const Card = ({img, name, onClick}: Props) => {

  return (
    <div onClick={onClick} className="flex items-center border-1 justify-between p-2">
        <div className="flex items-center w-110 gap-3">
            <img src={img} className="w-20 h-20 object-contain"/>
            <div className="font-semibold text-[20px]">{name}</div>
        </div>
    </div>
  )
}

export default Card