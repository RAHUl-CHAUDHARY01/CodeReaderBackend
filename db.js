const mongoose= require('mongoose');
// const mongoURI= "mongodb://localhost:27017/inotebook"
const mongoURI= "mongodb+srv://chaudharyrahul9315:L5MUD8mE6oRBiEfT@cluster0.vlqctrh.mongodb.net/"

const connectToMongo=()=>{
  mongoose.connect(mongoURI, ()=>{
    console.log("connected to mongoose successgully");
  })
}
module.exports = connectToMongo;