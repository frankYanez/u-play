import mongoose, { Schema } from "mongoose";

const songSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    // user: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true
    // }
})

export const SongModel = mongoose.model('Song', songSchema)