import React from 'react'
import videogames from '../data/videogames'
import { useState } from 'react'

function Main() {

    const [games, setGames] = useState(videogames)
    const [newGame, setNewGame] = useState('')

    const addGame = (e) =>{
        e.preventDefault();
        const newObj = {
            id: games[games.length-1].id + 1,
            name: newGame,
        }
        setGames([...games, newObj]);
        setNewGame('');
    }

    const removeGame = (gameId) =>{
        const updatedGames = games.filter((game) => {
            return gameId !== game.id;
        });

        setGames(updatedGames);
    };

  return (
    <>
        <div className='container'>
            <ul className="list-group justify-content-between">
                {games.map((videogame) => (
                    <li key={`videogame-${videogame.id}`} className="list-group-item d-flex justify-content-between">
                        {videogame.name}
                        <button className='btn btn-danger btn-sm' onClick={() => removeGame(videogame.id)}>Elimina</button>
                    </li>
                ))}
            </ul>

            <form onSubmit={addGame}>
                <div className='input-group my-5'>
                    <input 
                        type="text" 
                        className='form-control' 
                        placeholder='Inserisci un nuovo gioco!' 
                        value={newGame} 
                        onChange={(e) => setNewGame(e.target.value)}
                    />
                    <button className='btn btn-success'>Aggiungi</button>
                </div>
            </form>
        </div>
    </>
  )
}

export default Main