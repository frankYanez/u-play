import React, { useEffect, useState } from 'react'
import { getToRenderSongs } from '../api/getSongs'
import FormSongs from '../components/FormSongs'
import { useAuthContext } from '../context/userContext'



const SongsPage = () => {
    const { songs, refreshSongs } = useAuthContext()
    useEffect(() => {

        refreshSongs()

    }, [])


    return (
        <div>

            <div className='py-12'>

                <FormSongs />
                <div>
                    <h1>Songs</h1>
                    {
                        songs.map(song =>

                            <div key={song.id}>
                                <h2>{song.nombre}</h2>
                            </div>

                        )
                    }
                </div>

            </div>
        </div>
    )
}

export default SongsPage