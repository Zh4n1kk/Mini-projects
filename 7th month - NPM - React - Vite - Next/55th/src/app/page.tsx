import Card from "@/components/Card/Card";
export const revalidate = 5;
export const dynamicParams = true

const Page = async() => {
    try {
        const ask = await fetch(
            `https://rickandmortyapi.com/api/character?page=1`
        );
        const data = await ask.json();
        return (
            <>
                    <div className={`flex flex-wrap justify-center gap-5`}>
                        {data?.results.map((item: any) => {
                            return (
                                <Card
                                    key={item.id}
                                    heading={item.name}
                                    species={`Species:${item.species}`}
                                    status={`Species:${item.status}`}
                                    img={item.image}
                                    img_name={item.name}
                                    link={`http://localhost:3000/character/${item.id}`}
                                />
                            );
                        })}
                    </div>
            </>
        );
    } catch (err) {
        console.log(err)
    }
};

export default Page; 
