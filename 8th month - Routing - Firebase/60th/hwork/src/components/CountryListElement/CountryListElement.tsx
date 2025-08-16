type Props = {
	handleClick: (countryName: string) => void;
	el: {
		name: {
			common: string;
		};
	};
};

const CountryListElement = ({ handleClick, el }: Props) => {
	return (
		<div
			className="cursor-pointer border-r-1 border-l-1 truncate text-center m-2 mt-5"
			onClick={() => {
				handleClick(el.name.common);
			}}
		>
			{el.name.common}
		</div>
	);
};

export default CountryListElement;
