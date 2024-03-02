const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/userModel');

exports.register = async function(req,res){

    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const user = new User ({
            username: req.body.username,
            password: hashedPassword
        })

        const savedUser = await user.save();
        console.log(savedUser);
        return res.json(savedUser);

    }catch(err){
        console.log("Error: " + err);
        return res.status(400).send({
            message: err.message
        });
    }
}

exports.signIn = async function(req,res){
    try{
        const { username, password } = req.body;
        const user = await User.findOne({ username }).exec();
        if(!user) {
            return res.status(401).json({ message: 'User not found.' });
        }
        if (!user.comparePassword(password)) {
            return res.status(401).json({ message: 'Invalid password.' });
        }
        const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    
        return res.json({ token });
    }catch(err){
        console.error('Error during authentication:', err);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
   

}