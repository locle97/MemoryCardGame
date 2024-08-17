import { Pokemon } from "./Pokemon";

export function Card({ pokemon }: { pokemon: Pokemon }) {
  return (
    <>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <div className="text-gray-700">{pokemon.name}</div>
    </>
  );
}

