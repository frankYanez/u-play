import { SongModel } from "../models/songs.model.js"




export const createSong = async (req, res) => {
    const nombre = req.body


    const newSong = new SongModel(nombre
    )


    const songSet = await newSong.save()

    console.log(songSet);
    return res.send(songSet)


}
export const getSongs = async (req, res) => {
    const user = req.user

    const songs = await SongModel.find({})


    if (!songs) return res.json({ message: 'Song not found' })

    return res.json(songs)
}
export const deleteSong = async (req, res) => {
    const id = req.params.id


    const song = await SongModel.findByIdAndDelete(id)


    if (!song) return res.json({ message: 'Song not found' })

    return res.json({ message: 'song deleted' })
}
export const updateSong = async (req, res) => {
    const id = req.params.id
    const newcontent = req.body

    console.log(req.body);
    const song = SongModel.findByIdAndUpdate(id, newcontent, { new: true })

    if (!song) return res.send('no encontrada')
    return res.send('encontrada')
}