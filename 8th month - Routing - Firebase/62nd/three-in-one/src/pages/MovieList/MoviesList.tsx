import "./MoviesList.css";
import { useEffect, useState } from "react";
import Form from "../../components/Form/Form";
import MovieItem from "../../components/MovieItem/MovieItem";
import { axiosOrder } from "../../axios/axiosOrder";

type Movie = {
	id: string;
	text: string;
};
const MovieList = () => {
	const firebaseUrl =
		"https://hw-62-318da-default-rtdb.firebaseio.com/movies.json";
	const [movieList, setMovieList] = useState<Movie[]>([]);
	const [inputValue, setInputValue] = useState("");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	const addToList = async () => {
		if (inputValue.trim() === "") return;

		try {
			await axiosOrder.post("movies.json", { text: inputValue });
			setInputValue("");
			await fetchBase();
		} catch (err) {
			console.log(err);
		}
	};
	const filterEl = async (removeThisIndex: number) => {
		const movieToDelete = movieList[removeThisIndex];
		try {
			await axiosOrder.delete(`movies/${movieToDelete.id}.json`);
			await fetchBase();
		} catch (error) {
			console.log(error);
		}
	};

	const handleItemChangeBlur = async (el: string, index: number) => {
		const movie = movieList[index];

		try {
			await axiosOrder.patch(`movies/${movie.id}.json`, { text: el });
		} catch (error) {
			console.log(error);
		}
	};

	const handleItemChangeLocal = (el: string, index: string) => {
		setMovieList((prev) =>
			prev.map((mov) => (mov.id === index ? { ...mov, text: el } : mov))
		);
	};

	const fetchBase = async () => {
		const response = await axiosOrder.get(firebaseUrl);
		const json = response.data;

		if (json) {
			const loaded = Object.entries(json).map(([id, item]: [string, any]) => ({
				id,
				text: item.text,
			}));
			setMovieList(loaded);
		}
		console.log("reloaded");
	};
	useEffect(() => {
		fetchBase();
	}, []);

	return (
		<div className="container">
			<Form
				valueInput={inputValue}
				onChange={handleChange}
				onSubmit={addToList}
			/>
			<div className="list">
				{movieList.map((el, index) => {
					return (
						<MovieItem
							key={el.id}
							value={el.text}
							onChange={(value) => handleItemChangeLocal(value, el.id)}
							onClick={() => filterEl(index)}
							onBlur={(newValue) => handleItemChangeBlur(newValue, index)}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default MovieList;
