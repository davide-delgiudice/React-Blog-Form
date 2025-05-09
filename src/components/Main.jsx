import React from 'react'
import videogames from '../data/videogames'
import { useState } from 'react'

function Main() {
  return (
    <>
        <div className='container'>
            <ul className="list-group">
                {videogames.map((videogame) => (
                    <li key={`videogame-${videogame.id}`} className="list-group-item">
                        {videogame.name}
                    </li>
                ))}
            </ul>

            <form>
                <div className='input-group mt-5'>
                    <input type="text" className='form-control' placeholder='Inserisci un nuovo gioco!'/>
                    <button className='btn btn-success'>Aggiungi</button>
                </div>
            </form>
        </div>
    </>
  )
}

export default Main