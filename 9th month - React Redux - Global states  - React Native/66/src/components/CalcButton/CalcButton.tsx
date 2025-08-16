import './CalcButton.css'

type Props = {
    children: React.ReactNode
    onClick: () => void;
}

const CalcButton = ({children, onClick} : Props) => {
    return (
    <button className='calc-btn' onClick={onClick}>
    {children}
    </button>
    )
}

export default CalcButton