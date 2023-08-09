import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addSong } from '../redux/slices/songSlice';
import { createASong } from '../api/getSongs';
import { useAuthContext } from '../context/userContext';

const FormSongs = () => {
  const [songName, setSongName] = useState('')
  const { refreshSongs } = useAuthContext()
  const dispatch = useDispatch();



  const handleSubmitSong = (e) => {
    e.preventDefault()
    dispatch(addSong(songName))

    createASong(songName)
    refreshSongs()

  }
  return (
    <div>
      <form onSubmit={handleSubmitSong}>
        <input type="Song name"
          value={songName}
          name='songName'
          onChange={(e) => setSongName(e.target.value)}
        />
        <button>Send song</button>
      </form>
    </div>
  )
}

export default FormSongs