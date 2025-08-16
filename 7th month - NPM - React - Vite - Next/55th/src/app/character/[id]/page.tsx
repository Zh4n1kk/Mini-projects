import SimilarCharacters from "@/components/SimilarCharacters/SimilarCharacters"
import Link from "next/link"

const Page = async({ params }: {params: Promise<{ id: string }> }) => {
    try {
        const { id } = await params
        const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`) 
        const character = await res.json()

        return(
            <div className={`flex flex-col items-center`}>
                <p>№{character.id}</p>
                <p>Name: {character.name}</p>
                <img src={character.image} alt={character.name} width={350} />
                <p>Status: {character.status}</p>
                <p>Gender: {character.gender}</p>
                <p>Species: {character.species}</p>
                <p>Current location: {character.location.name}</p>
                
                <Link href={`/`}>
                <p>Go back to main page!</p>
                </Link>

                <SimilarCharacters 
                species={character.species}
                currentCharId={character.id}
                />
            </div>
        )
    } catch(err) {
        console.log(err)
    }

}

export default Page