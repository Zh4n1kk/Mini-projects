type TCountry = {
	name: {
		common: string;
	};
	flags: {
		svg: string;
		png: string;
	};
	borders: string[];
	population: number;
    capital: string;
};

export default TCountry;
