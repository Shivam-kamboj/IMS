import express from 'express';
import cors from 'cors';
import { Product } from "./models/product.model.js";

const app=express();
app.use(cors());
app.use(express.json());

app.post('/api/products',async (req,res)=>{
    try{
        const product=await Product.create(req.body);
        res.status(200).json({
           
            product
        })
    }
    catch(error){
        res.status(500).json({
        error:error.message
        })
    }
})

app.get('/api/products',async (req,res)=>{
    try{
        const products=await Product.find().sort({ productCode: 1 }); ;
        res.json(products)
    }
    catch(error){
        res.json(error);
    }
})
//find by id
app.get('/api/products/:id',async (req,res)=>{
    try{
         const prodcutid=req.params.id;
         const productbyid=await Product.findOne({productCode:prodcutid})
         if(!productbyid){
            res.status(404).json({
                message:'Product not Found'
            })
        
         }
         res.json(productbyid)
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
})

//update product
app.put('/api/products/:id',async(req,res)=>{
    try{
        const productcode=req.params.id;
        const updates=req.body;
        const udatedproduct=await Product.findOneAndUpdate({productCode:productcode},{$set:updates},{new:true})
        res.json(udatedproduct)
         if(!productbyid){
            res.status(404).json({
                message:'Product not Found'
            })
        }
        
    }
    catch(error){
        res.status(500).json({error:error.message});
    }
})

//delete
app.delete('/api/products/:id',async (req,res)=>{
    try{
         const prodcutid=req.params.id;
         const productbyid=await Product.findOneAndDelete({productCode:prodcutid})
         if(!productbyid){
            res.status(404).json({
                message:'Product not Found'
            })
        
         }
         res.json({message:"product deleted"
            ,productbyid
            
         })
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
})


export {app};