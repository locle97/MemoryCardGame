import { Card } from "./Card";
import { Pokemon } from "./Pokemon";

export function GameBoard({ pokemonList, onClickCard }: { pokemonList: Pokemon[], onClickCard: Function}) {
    return (
        <>
            <ul className="flex flex-wrap">
                {pokemonList.map((pokemon, index) => (
                    <li key={index} className="flex flex-col items-center w-1/3 h-1/3 bg-gray-200 hover:bg-gray-400 hover:cursor-pointer" onClick={() => onClickCard(pokemon)}>
                        <Card pokemon={pokemon} />
                    </li>
                ))}
            </ul>
        </>
    );
}

