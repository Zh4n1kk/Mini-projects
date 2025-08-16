import { useEffect } from "react"
import { useAppDispatch } from "../hooks/useAppDispatch"
import { useAppSelector } from "../hooks/useAppSelector"
import { fetchTv, setSearch } from "../store/tv.slice"
import { useNavigate } from "react-router"

const HomePage = () => {
  const { search, movieList, hintList } = useAppSelector((state) => state.tv)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchTv({search, mode: 'movieList'}))
  }, [dispatch])

  useEffect(() => {
    
    return (() => {

    })
  }, [JSON.stringify(movieList)])

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(fetchTv({search, mode: 'hintList'}))
    }, 500)

    return(() => {
      clearTimeout(timeout)
    })
  }, [search])

  return (<>
    <div className='container'>

      <div className='inputs'>
        
        <div className="inputs_searchbar">
          <p>Search for a show</p>
          <input type='text' value={search} onChange={e => dispatch(setSearch(e.target.value))} />
          <button onClick={() => dispatch(fetchTv({search, mode: 'movieList'}))}>Search</button>
        </div>

        <div className="inputs_cmplt">
          {hintList.map(el => {
            return <p onClick={() => { navigate(`shows/${el.show.id}`)}} className="inputs_cmplt-el">{el.show.name}</p>
          })}
        </div>
      </div>

      <div className="search_result">
          {movieList.map(el => {
            return (<div onClick={() => { navigate(`shows/${el.show.id}`) }} className="search_result-card">
              {el.show.image ? <img className="search_result-img" src={el.show.image.medium} /> : <div className="search_result-img">'N/A'</div>}
              <div className="search_result-card_bottom" key={el.show.id}>
              <p>{el.show.name}</p>
              <p>Rate: {el.show.rating.average? el.show.rating.average : 'N/A'}</p>
              </div>
            </div>)
          })}
      </div>
    </div>
  </>
  )
}

export default HomePage