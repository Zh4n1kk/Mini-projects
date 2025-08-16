

import {apiAxios} from "../../axios/apiAxios.ts";
import {useEffect, useState} from "react";
import type {TQuote} from "../../types/TQuote.ts";
import QuoteCard from "../../Components/QuoteCard/QuoteCard.tsx";
import { useNavigate, useParams } from "react-router";
import SideNav from "../../Components/SideNav/SideNav.tsx";

const CategoryPage = () => {
    const [quotes, setQuotes] = useState<Record < string, TQuote >>({});

    const { categoryId } = useParams()
    const navigate = useNavigate()

    const fetchData = async () => {
        const response = await apiAxios.get(`/quotes.json?orderBy="category"&equalTo="${categoryId}"`);
        setQuotes(response.data);
    }

    const deleteQuote = (id: string) => {
        apiAxios.delete(`quotes/${id}.json`)
    }

    const editQuote = (id: string) => {
        navigate(`/quotes/${id}/edit`)    
    }

    useEffect(() => {
        fetchData()
    }, [categoryId])

    if (!quotes) return <p>No info</p>
    return (
        <div>
            <SideNav/>
            <p className="Header_text">{categoryId === 'star-wars'? 'Star Wars' : categoryId === 'famous' ? 'Famous people' : categoryId}</p>
            {Object.entries(quotes).map(([id, quote]) => (
                <QuoteCard key={id} author={quote.author} quote={quote.quote} editBtn={() => {editQuote(id)}} deleteBtn={() => {deleteQuote(id)}}/>
            ))}
        </div>
    )
}

export default CategoryPage