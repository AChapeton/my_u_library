import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export const createAccessToken = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      process.env.TOKEN_SECRET,
      {
        expiresIn: "1d",
      },
      (error, token) => {
        if (error) reject(err);
        resolve(token)
      }
    );
  });
};
