import mongoose from "mongoose";

const teamsModel = new mongoose.Schema({
    name: {
        type: String,
    },
    quantity: {
        type: Number,  
    },
    players:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    images: [{
        type: String,
    }],
    }, {
        timestamps: true,
    }
);

export default mongoose.model('Teams', teamsModel);
