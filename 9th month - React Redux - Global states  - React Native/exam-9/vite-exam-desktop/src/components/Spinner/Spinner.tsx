import style from './Spinner.module.css'

const Spinner = () => {
    return (
    <div className='w-full h-full'>
    <span className={style.loader}></span>
    </div>
    )
}

export default Spinner