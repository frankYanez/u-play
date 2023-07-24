import {SongModel} from "../models/songs.model.js"



export const createSong = async (req,res)=>{
    const {nombre} = req.body

    
    const newSong = new SongModel({
        nombre,
        user: req.user.payload
    })
    

    const songSet = await newSong.save()

    return res.send(songSet)


}
export const getSongs = async (req,res)=>{
    const songs = await SongModel.find({})

    
     res.json(songs)
}
export const deleteSong = async (req,res)=>{
    const id = req.params.id

    
    const song = await SongModel.findByIdAndDelete(id)

    
    if(!song) return res.json({message: 'Song not found'})

    return res.json({message: 'song deleted'})
}
export const updateSong = async (req,res)=>{
    const id = req.params.id
    const newcontent = req.body

    console.log(req.body);
    const song = SongModel.findByIdAndUpdate(id, newcontent, {new: true})

    if(!song) return res.send('no encontrada')
    return res.send('encontrada')
}