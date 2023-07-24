import mongoose from "mongoose";


export const dbConnect = ()=>{
    const DB_URI = process.env.MONGO_URI;
    mongoose.connect(DB_URI)
    .then(()=> console.log('connected'))
    .catch(err => console.log(err))
}