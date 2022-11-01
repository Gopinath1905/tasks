const mongoose = require("mongoose");

const couponSchema = mongoose.Schema({
        OfferName:String,
        CouponCode:String,
        StartDate:Date,
        EndDate:Date,
        Status:String,
},{
    timestamps: true
});

module.exports = mongoose.model('Coupon',(couponSchema));

