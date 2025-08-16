import { Component } from "react";

type Props = {
	value: string;
	onChange: (value: string) => void;
	onClick: () => void;
	onBlur: (value: string) => void;
};

class MovieItem extends Component<Props> {
	shouldComponentUpdate(nextProps: Props): boolean {
		return nextProps.value !== this.props.value;
	}
	render() {
		const { value, onClick, onChange, onBlur } = this.props;
		return (
			<div className="container">
				<div className="inputs">
					<input
						type="text"
						value={value}
						onChange={(e) => onChange(e.target.value)}
						onBlur={(e) => onBlur(e.target.value)}
					></input>
					<button onClick={onClick}>REMOVE</button>
				</div>
			</div>
		);
	}
}

export default MovieItem;
