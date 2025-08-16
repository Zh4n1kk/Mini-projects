import Link from "next/link"

type Props = {
    heading: string
    species: string
    status: string
    img: string
    img_name: string
    link: string
}

const Card = ({heading,species,status,img,img_name,link}: Props) => {
    return (
        <Link href={link}>
        <div className={`w-[252.007px] text-white`}>
            <div className={`bg-cyan-900 text-white truncate w-full text-center rounded-t-sm`}>{heading}</div>
            <img src={img} alt={img_name} width={300} height={250}/>
            <div className={`p-1 bg-cyan-800`}>
            <div className={`text-white`}>{species}</div>
            <div className={`text-white`}>{status}</div>
            </div>
        </div>
        </Link>
    )
}

export default Card