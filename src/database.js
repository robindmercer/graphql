require('dotenv').config();
import mongoose from 'mongoose'
const { DB_USER, DB_PASSWORD } = process.env;
export async function connect(){
    try {        
        await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.lg0aogq.mongodb.net/?retryWrites=true&w=majority`) 
        console.log('DB connected')   
    } catch (error) {
        console.log('Error not connected')   
        console.log('erro: ', error);        
    }
}

