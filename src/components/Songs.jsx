import React from 'react'
import { useSelector } from 'react-redux'

const Songs = () => {
  const arraySongs = useSelector(state => state.songs)
  return (
    <section>
      {
        arraySongs.map(song =>
          <div key={song}>
            <h2>{song}</h2>
            <button onClick={() => handleDelete()}>Delete</button>
          </div>
        )
      }
    </section>
  )
}

export default Songs