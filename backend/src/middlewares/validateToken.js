import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export const authRequired = (req, res, next) => {
  const token = req.header('Authorization');

  if(!token) return res.status(401).json({message: "Authorization denied"})

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if(err) return res.status(401).json({message: "Invalid token"})
    req.user = user
    next()
  })
}