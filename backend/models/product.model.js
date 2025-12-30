import mongoose from "mongoose"


const productSchema = mongoose.Schema({
    productCode: { type: String, unique: true },
    productName: { type: String },
    category: { type: String },
    price: { type: Number }
})

export const Product= mongoose.model("Product", productSchema);