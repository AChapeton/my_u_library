import app from "./app.js"
import { connectDB } from "./database.js"


const main = async () =>{
  await connectDB()
  await app.listen(4000)
  console.log('Server on port 4000')
}

main()
