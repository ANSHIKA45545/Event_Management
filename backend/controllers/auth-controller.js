const User = require("../model/user-model");
const bcrypt = require('bcrypt');

const home =async(req,res) =>{
    try{
        res.status(200).send("Home Page");
    }catch(error){
        console.log(error);
    }
}

const register = async(req,res) =>{
    try{
        console.log(req.body);
        const {name,email,phone ,password}=req.body;
        const userExist = await User.findOne({email});

        if(userExist){
            return res.status(400).json({msg: "Email already exists"});
        }

        // const saltRound=10;
        // const hash_password = await bcrypt.hash(password,saltRound);

        const userCreated = await User.create({name,email,phone ,password});
        res.status(201).send({msg: "Registration successfully", token: await userCreated.generateToken(), 
            userId: userCreated._id.toString()});
    }catch(error){
        // res.status(500).json("Server error");
        next(error);
    }
}

const login = async(req,res) =>{
    try{
        const {email,password}= req.body;
        const userExist = await User.findOne({email});
        console.log(userExist);

        if(!userExist){
            return res.status(400).json({message: "Invalid credentials"});
        }
        // const user = await bcrypt.compare(password, userExist.password);
        const user = await userExist.comparePassword(password);

        if(user){
            res.status(201).send({
                msg: "Login successfully",
                 token: await userExist.generateToken(), 
                userId: userExist._id.toString()});
        }else{
            res.status(401).json({message:"Invalid email or password"});
        }
    }catch(error){
        res.status("Internal server error")
    }
}


const user = async(req,res) =>{
    try{
        const userData = req.user;
        console.log(userData);
        return res.status(200).json({userData});
    }catch(error){
        console.log(`Error from the user route ${error}`);
    }
}

const getUserProfile = async(req,res) =>{
    try{
        const loggedInUser = req.userID;
        console.log(loggedInUser);
        const filteredUsers = await User.find({_id: {$ne:loggedInUser}}).select(
            "-password",
        )
        return res.status(200).json({ filteredUsers });
        
    }catch(error){
        console.log(error)
        console.log("Error in allUsers controller");
        res.status(500).json({message:"server error"});
    }
};

module.exports= {home, register,login ,user,getUserProfile};