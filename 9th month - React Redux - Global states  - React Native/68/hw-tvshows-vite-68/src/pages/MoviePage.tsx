import { NavLink, useParams } from "react-router"
import { useAppSelector } from "../hooks/useAppSelector"
import { useEffect } from "react"
import { useAppDispatch } from "../hooks/useAppDispatch"
import { fetchTvById } from "../store/tv.slice"

const MoviePage = () => {
    const { id } = useParams()
    const { currentMovie } = useAppSelector(state => state.tv)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (id) {
        dispatch(fetchTvById(id))
        console.log(currentMovie)
        }
    }, [])

    return(<div className="container">
        <NavLink to={'/'}>Go back</NavLink>
        <div className="movie-top">
              {currentMovie?.image ? <img className="movie-img" src={currentMovie?.image.original} /> : <div className="movie-img">'N/A'</div>}
              <div className="movie-top-info">
                <p className="header">{currentMovie?.name}</p>
                <p className="header">{currentMovie?.rating.average}</p>
                <p className="body">Genre: {currentMovie?.genres[0]? currentMovie?.genres[0] : 'N/A'}{currentMovie?.genres[1]? `/${currentMovie?.genres[1]}` : ''}</p>
                <p className="body">Description:</p>
                <div dangerouslySetInnerHTML={{__html: currentMovie?.summary? currentMovie?.summary : 'N/A'}}></div>
              </div>
        </div>
    </div>)
}

export default MoviePage