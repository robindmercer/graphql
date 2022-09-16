import {Schema, model } from 'mongoose';

const userSchema = new Schema({
    firstname: String,
    lastname: String,
    age: Number 
});

export default model('User',userSchema);