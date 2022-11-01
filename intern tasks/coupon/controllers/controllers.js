const express = require ("express");
const Coupon  = require("../coupon/coupon");

exports.create = async(req, res) => {
    try{
    Coupon.findById(req.body.OfferName, (err, data) => {
        if (!data) {
            var currentStatus;
            var currentDate=new Date().getTime()
            var dateOne = new Date(req.body.EndDate).getTime();
            if (currentDate < dateOne) {
                currentStatus = "Active";
            } else {    
                currentStatus = "Inactive";    
            }
        const coupon = new Coupon({
        OfferName:req.body.OfferName,
        CouponCode:req.body.CouponCode,
        StartDate:req.body.StartDate,
        EndDate:req.body.EndDate,
        Status:currentStatus,

    });
    
    coupon.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:"Error occured"
        });
    });
    }})
    }catch(error) {
        res.status(409).json({ message: error?.message || error })
      }
    };
    
exports.Status = (req, res) => {
    Coupon.find({Status:req.params.Status,StartDate:req.params.StartDate})
    .then(coupon => {
        res.send(coupon);
    }).catch(err => {
        res.status(500).send({
            message:"Error occured"
        });
    });
};


