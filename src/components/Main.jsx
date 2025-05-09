import React from 'react'
import videogames from '../data/videogames'

function Main() {
  return (
    <>
        <div>
            <ul className="list-group">
                {videogames.map((videogame) => (
                    <li key={`videogame-${videogame.id}`} className="list-group-item">
                        {videogame.name}
                    </li>
                ))}
            </ul>
        </div>
    </>
  )
}

export default Main