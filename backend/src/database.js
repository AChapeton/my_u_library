import mongoose from 'mongoose'

const URI = "mongodb://127.0.0.1/uni_library";

export const connectDB = async () => {
  try{
    await mongoose.connect(URI)
    console.log('DB is connected')
  }catch(error){
    console.log(error)
  }
}
