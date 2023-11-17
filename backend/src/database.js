import mongoose from 'mongoose'
import {MONGO_URI} from '../config';

export const connectDB = async () => {
  try{
    await mongoose.connect(MONGO_URI)
    console.log('DB is connected')
  }catch(error){
    console.log(error)
  }
}
