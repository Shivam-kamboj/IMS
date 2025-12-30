
import { app } from "./app.js";
import {connectDB} from './DB/db.js';

connectDB();
const PORT=3000;
app.listen(PORT,()=>{
    console.log(`Server is running on localhost:${PORT}`)
})