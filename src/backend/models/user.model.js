import mongoose, { Schema } from "mongoose";
import { SongModel } from "./songs.model.js";

const userSchema = new Schema({
    nombre:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    songs:{
        type:[
            {
                type: Schema.Types.ObjectId,
                ref: SongModel
            }
        ]
    }
})

export const UserModel = mongoose.model('User', userSchema)