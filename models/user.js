const mongoose = require('mongoose');
const userModel = mongoose.Schema({
    name: {type: String, required:true},
    mobile: {type: String, required:true,unique:true},
    email: {type: String, required:true},
    address: {
        street: String,
        locality: String,
        city: String,
        state: String,
        pincode: String,
        coordinatesType: {type:String},
        coordinates: {
            type: [Number],
            index: "2dsphere"
        }
    },
    
},{timestamps: true});
userModel.index({ "address.coordinates": '2d' });

module.exports = mongoose.model('User', userModel);