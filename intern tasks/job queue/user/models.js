const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    JobID:{
        type: Number,
        require:true
    },
    Email:{
        type: String,
        require:true
    }
},{
    timestamps: true
});

 module.exports=mongoose.model('User',userSchema);
