type Props = {
    regime: "country" | "city"
    contry:string
    city:string
    selectHandler:(e:React.ChangeEvent<HTMLSelectElement>)=>void
}


const Options = (props: Props) => {
     const contries = {
            Kazakhstan: ["Almaty","Astana","Shymkent"],
            USA:["Los-Angelse","Maiami", "Houston"]
        }
    const optCont = (
        <select onChange={props.selectHandler} value={props.contry} name="contry">
            {Object.keys(contries)?.map((i, index) => {
                return <option  key={index} >{i}</option>
            })} 

        </select>
    )

    const optCity = (
        <select name="city" onChange={props.selectHandler} value={props.city}>
            {contries[props.contry as keyof typeof contries]?.map((i, index) => {
                return <option key={index} >{i}</option>
            })}

        </select>
    )

    return (
        <div>
            {props.regime=="country"?
            optCont
            :
            optCity
        }
        </div >
    )
}

export default Options

