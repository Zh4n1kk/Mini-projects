import { Component } from "react";

type Props = {
	value: string;
	onChange: (value: string) => void;
	onClick: () => void;
};

class MovieItem extends Component<Props> {
    shouldComponentUpdate(nextProps: Props): boolean {
		return (
			nextProps.value !== this.props.value 
		);
	}
	render() {
		const { value, onClick, onChange } = this.props;
		return (
			<div>
				<input
					type="text"
					value={value}
					onChange={(e) => onChange(e.target.value)}
				></input>
				<button onClick={onClick}>REMOVE</button>
			</div>
		);
	}
}

export default MovieItem;
