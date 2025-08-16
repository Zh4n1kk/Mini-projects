"use client";
import { useEffect, useState } from "react";
import "./Home.css";
import TCountry from "@/types/TCountry";
import CountryListElement from "@/components/CountryListElement/CountryListElement";
import Image from "next/image";

const Home = () => {
	const [countries, setCountries] = useState<TCountry[]>([]);
	const [currentCountry, setCurrentCountry] = useState<string | undefined>(
		undefined
	);
	const [countryData, setCountryData] = useState<TCountry[]>([]);
	const [borders, setBorders] = useState<TCountry[]>([]);

	const fetchData = async () => {
		const response = await fetch(`https://restcountries.com/v3.1/all`);
		const data = await response.json();
		setCountries(
			data.sort((a: TCountry, b: TCountry) =>
				a.name.common.localeCompare(b.name.common)
			)
		);
	};

	const fetchCountry = async (currentCountry: string) => {
		const response = await fetch(
			`https://restcountries.com/v3.1/name/${currentCountry}`
		);
		const data = await response.json();
		setCountryData(data);
	};
	useEffect(() => {
		const fetchBorders = async () => {
			const borders = countryData[0]?.borders;
			if (!borders || borders.length === 0) return setBorders([]);

			const codes = borders.join(",");
			const response = await fetch(
				`https://restcountries.com/v3.1/alpha?codes=${codes}`
			);
			const data = await response.json();
			setBorders(data);
		};

		fetchBorders();
		console.log(borders);
		return () => {};
	}, [countryData]);

	const handleClick = async (name: string) => {
		setCurrentCountry(name);
		await fetchCountry(name);
	};

	useEffect(() => {
		fetchData();

		return () => {};
	}, []);

	return (
		<div className="flex flex-col justify-center items-center min-h-screen">
			<div className="flex w-1/2 p-2 bg-white">
				<div className="list p-1">
					{countries.map((el, i) => {
						return (
							<CountryListElement
								key={i}
								el={el}
								handleClick={() => handleClick(el.name.common)}
							/>
						);
					})}
				</div>
				<div className="p-5">
					{currentCountry ? (
						<div>
							<div>Country name: {countryData[0]?.name?.common}</div>
							{currentCountry &&
							countryData.length > 0 &&
							countryData[0]?.flags?.svg ? (
								<Image
									src={countryData[0]?.flags.svg}
									width={250}
									height={250}
									alt={countryData[0]?.name?.common}
								/>
							) : null}
							<div>Population: {countryData[0]?.population}</div>
							<div>Capital: {countryData[0]?.capital}</div>
							<div>Borders: </div>
							<ul>
								{borders.length === 0
									? `This country probably is island and has no borders`
									: borders.map((cntry, i) => {
											return <li key={i}>{cntry.name.common}</li>;
									  })}
							</ul>
						</div>
					) : (
						"N/A"
					)}
				</div>
			</div>
		</div>
	);
};

export default Home;
