import React from 'react'
import videogames from '../data/videogames'
import { useState } from 'react'

function Main() {

    const [games, setGames] = useState(videogames)
    const [newGame, setNewGame] = useState('')

    const addGame = (e) =>{
        e.preventDefault();
        setGames([...games, newGame]);
        setNewGame('');
    }

  return (
    <>
        <div className='container'>
            <ul className="list-group">
                {games.map((videogame) => (
                    <li key={`videogame-${videogame.id}`} className="list-group-item">
                        {videogame.name}
                    </li>
                ))}
            </ul>

            <form onSubmit={addGame}>
                <div className='input-group mt-5'>
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