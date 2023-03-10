import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const userModel = new mongoose.Schema({
    pseudo: {
        type: String,
    },
    email: {
        type: String,  
        unique: true
    },
    age:{
        type: Number,
    },
    password: {
        type: String, 
    },
    role: {
        type: String,
    },
    image: [{
        type: String,
    }]
    }, {
        timestamps: true,
    }
);

userModel.methods.createJWT = function () {
    return jwt.sign({
        id: this._id,
        email: this.email
    },'key_secret', {expiresIn: '1h'})
}

userModel.post('save', function (err, doc, next) {
    if(error.name === 'MongoError' && error.code === 11000){
        next(new Error('Cet email est déjà utilisé'));
    } else {
        next(err)
    }
})

export default mongoose.model('User', userModel);






