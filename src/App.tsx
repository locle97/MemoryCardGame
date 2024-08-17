import { useState, useEffect } from 'react';
import './App.css'
import { ScoreBoard } from './ScoreBoard';
import { GameBoard } from './GameBoard';

const BASE_URL = "https://pokeapi.co/api/v2/";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const [pokemonList, setPokemonList] = useState<any[]>([]);
  const [selectedList, setSelectedList] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch(`${BASE_URL}pokemon?offset=0&limit=12`);
      let data = await res.json();

      let pokemonList = data.results;
      let tempList = [];
      for (let i = 0; i < pokemonList.length; i++) {
        const pokemon = pokemonList[i];
        res = await fetch(pokemon.url);
        data = await res.json();
        tempList.push(data);
      }
      tempList = tempList.sort(() => Math.random() - 0.5);

      setPokemonList(tempList);
      setIsLoading(false);
    }

    fetchData();
  }, []);

  const sufflePokemonList = () => {
    setPokemonList(pokemonList.sort(() => Math.random() - 0.5));
  };

  const resetGame = () => {
    if (score > highScore)
      setHighScore(score);
    setScore(0);
    setSelectedList([]);
  }

  const onClickCard = (pokemon: any) => {
    if (selectedList.includes(pokemon.name))
    {
      alert("Game Over");
      resetGame();
    }
    else {
      setScore(score + 1);
      setSelectedList([...selectedList, pokemon.name]);
    }
    sufflePokemonList();
  };

  return (
    <>
      <div className="flex flex-col bg-white w-screen h-screen items-center">
        <h1 className="text-3xl font-bold text-center text-gray-700">
          Memory Game
        </h1>
        <p>Click on an image to earn points, but don't click on any more than once!</p>
        { isLoading && <div className="text-gray-700 text-center">Loading...</div>}
        { !isLoading && 
          <div className="text-gray-700 text-center">
            <ScoreBoard score={score} highestScore={highScore} />
            <GameBoard pokemonList={pokemonList} onClickCard={onClickCard}/>
          </div>}
      </div>
    </>
  )
}

export default App
