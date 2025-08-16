/* eslint-disable */
import "./MoviesList.css";
import { Component } from "react";
import Form from "../../components/Form/Form";
import MovieItem from "../../components/MovieItem/MovieItem";

type State = {
	inputValue: string;
	movieList: string[];
};

class MovieList extends Component<{}, State> {
	state: State = {
		inputValue: "",
		movieList: [],
	};

	handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		this.setState({ inputValue: e.target.value });
	};

	addToList = () => {
		const { inputValue, movieList } = this.state;

		if (inputValue.trim() !== "") {
			this.setState({
				movieList: [...movieList, inputValue],
				inputValue: "",
			});
		}
	};
	filterEl = (removeThisIndex: number) => {
		const newList = this.state.movieList.filter(
			(_, index) => index !== removeThisIndex
		);
		this.setState({ movieList: newList });
	};

	handleItemChange = (el: string, index: number) => {
		const newList = [...this.state.movieList];
		newList[index] = el;
		this.setState({ movieList: newList });
	};

	render() {
		return (
			<>
				<Form
					valueInput={this.state.inputValue}
					onChange={this.handleChange}
					onSubmit={this.addToList}
				/>
				<div className="list">
					{this.state.movieList.map((el, index) => {
						return (
                            <MovieItem 
                            key={index}
                            value={el}
                            onChange={value => this.handleItemChange(value,index)}
                            onClick={() => this.filterEl(index)}
                            />
						);
					})}
				</div>
			</>
		);
	}
}

export default MovieList;
