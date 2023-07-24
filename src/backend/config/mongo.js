import mongoose from "mongoose";


export const dbConnect = ()=>{
    const DB_URI = 'mongodb+srv://frankyanez9413:FfNYEsZVj8UlP3nh@u-play.q17ha7v.mongodb.net/songs?retryWrites=true&w=majority';
    mongoose.connect(DB_URI)
    .then(()=> console.log('connected'))
    .catch(err => console.log(err))
}