import { useEffect, useState } from "react"
import PageEditor from "../../components/PageEditor/PageEditor"
import PageViewer from "../../components/PageViewer/PageViewer"

const Admin = () => {
    const [page, setPage] = useState('')
    const [editMode, turnEditMode] = useState<boolean>(false) 

    useEffect(() => {

    }, [editMode])
    return (
    <>
    <button onClick={() => {turnEditMode(!editMode) 
        console.log(editMode)}}>edit</button>
        <select onChange={(e) => {setPage(e.target.value)}}>
        <option value="-">-</option>
        <option value="home">home</option>
        <option value="aboutus">aboutus</option>
        <option value="services">services</option>
        <option value="contacts">contacts</option>
        <option value="faq">faq</option>
    </select>
        {editMode ? <PageEditor pageId={page}/> : <PageViewer pageId={page}/>}
    </>
)
}

export default Admin