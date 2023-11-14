import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";
export const register = async (req, res) => {
  //Catch data from body in request
  const { username, email, password, type } = req.body;

  try {
    //Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    
    //Create new user object
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      type,
    });

    //Save new user in db
    const userSaved = await newUser.save();
    
    //Create auth token
    const token = await createAccessToken({id: userSaved._id})
    
    //Save token in cookies
    res.cookie('token', token)
    
    //Return the credentials to the user
    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      type: userSaved.type
    })
  } catch (error) {
    res.status(500).json({message: error.message})
  }
};
export const login = async (req, res) => {
  //Catch data from body in request
  const { email, password } = req.body;

  try {
    //Find if the user exist
    const userFound = await User.findOne({email})
    if(!userFound) return res.status(400).json({message: "Invalid credentials"})

    //Check password
    const isPasswordMatch = await bcrypt.compare(password, userFound.password);

    if(!isPasswordMatch) return res.status(400).json({message: "Invalid credentials"})
    
    //Create auth token
    const token = await createAccessToken({id: userFound._id})
    
    //Save token in cookies
    res.cookie('token', token)
    
    //Return the credentials to the user
    res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      type: userFound.type
    })
  } catch (error) {
    res.status(500).json({message: error.message})
  }
};

export const logout = (req, res) => {
  res.cookie('token', "", {
    expires: new Date(0)
  })
  return res.sendStatus(200)
}
