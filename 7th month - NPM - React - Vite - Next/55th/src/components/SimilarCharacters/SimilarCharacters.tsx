"use client";

import { useEffect, useState } from "react";
import Card from "../Card/Card";
type Props = {
    species: string;
    currentCharId: number;
};
const SimilarCharacters = ({ species, currentCharId }: Props) => {
    const [charData, setCharData] = useState<any>([]);
    const [index,incrementIndex] = useState(0)
    useEffect(() => {
        const asyncFunc = async () => {
            const res = await fetch(
                `https://rickandmortyapi.com/api/character/?species=${species}`
            );
            const char = await res.json();
            setCharData(char.results);
        };
        asyncFunc();
        incrementIndex((prev) => prev + 1)
    }, [JSON.stringify(charData)]);
    return (
        <div key={index} className={`flex flex-wrap justify-center gap-5`}>
            {charData?.filter(((ch:any) => ch.id !== currentCharId)).map((item: any) => {
                return (
                    <>
                        <Card
                            key={item.id}
                            heading={item.name}
                            species={`Species:${item.species}`}
                            status={`Status:${item.status}`}
                            img={item.image}
                            img_name={item.name}
                            link={`http://localhost:3000/character/${item.id}`}
                        />
                    </>
                );
            })}
        </div>
    );
};

export default SimilarCharacters;
