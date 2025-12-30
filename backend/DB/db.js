import mongoose from "mongoose";
export function connectDB(){
mongoose.connect('mongodb://localhost:27017/productDB').then(()=>{
 console.log("MongoDB connected successfully")
 
})
 .catch((err)=>{
    console.log('Mondo db didnot connected'+err)
 })
}