import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const namespace = 'tv'

export const fetchTv = createAsyncThunk(
    `${namespace}/fetchTv`,
    async({search,mode }:{search: string, mode: 'movieList' | 'hintList'}) => {
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${search}`)
        return {data: await response.json(), mode}
    }
)

export const fetchTvById = createAsyncThunk(
    `${namespace}/fetchTvById`,
    async(id: string) => {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`)
        return await response.json()
    }
)

type Movie = {
    id: number,
    name: string,
    genres: string[],
    status: string,
    image: {
        medium: string,
        original: string,
    }
    rating: {
        average: string
    }
    network: {
        name: string
    },
    summary: string
}

type Search = {
    score: number,
    show: Movie
}

type TvState = {
    search: string
    movieList: Search[],
    hintList: Search[],
    currentMovie: Movie | null
    loading: boolean,
}
const initialState: TvState = {
    search: 'CSI',
    movieList: [],
    hintList: [],
    currentMovie: null,
    loading: false
}

const tvSlice = createSlice({
    name: namespace,
    initialState,
    reducers: {
        setSearch(state, action) {
            state.search = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTv.pending, (state) => {
            state.loading = true
        }).addCase(fetchTv.fulfilled, (state,action) => {
            if(action.payload.mode === 'hintList') {
                state.hintList = action.payload.data
            } else {
                state.movieList = []
                state.movieList = action.payload.data
            }
            state.loading = false
        }).addCase(fetchTv.rejected, (state)=> {
            state.loading = false
        })
        builder.addCase(fetchTvById.pending, (state) => {
            state.loading = true
        }).addCase(fetchTvById.fulfilled, (state,action) => {
            state.currentMovie = action.payload
            state.loading = false
        })
    }
})

export const { setSearch } = tvSlice.actions
export default tvSlice.reducer