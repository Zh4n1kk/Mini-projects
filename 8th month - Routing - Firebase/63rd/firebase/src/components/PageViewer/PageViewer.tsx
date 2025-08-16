import { useEffect, useState } from "react"
import { axiosOrder } from "../../axios/axiosOrder"
import type { TPageData } from "../../types/TPageData"
import MDEditor from '@uiw/react-md-editor';

type Props = {
    pageId: string
}

const PageViewer = ( {pageId}: Props ) => {
    const [data, setData] = useState<TPageData | null>(null)

    const fetchData = async(id: string) => {
        console.log(data)
        const response = await axiosOrder.get(`${id}.json`)
        await setData(response.data)
    }

    useEffect(() => {
        fetchData(pageId)
    }, [pageId])

    if (!data) return <>Page not found.</>
    return(
        <>
            <MDEditor.Markdown source={data.header} style={{background: 'none'}}/>
            <MDEditor.Markdown source={data.body} style={{background: 'none'}}/>
        </>
    )
}

export default PageViewer