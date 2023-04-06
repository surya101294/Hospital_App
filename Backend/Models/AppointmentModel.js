const mongoose = require("mongoose")

const appointSchema = mongoose.Schema({
    Name: { type: String, required: true },
    ImageUrl: { type: String, required: true },
    Specialisation: { type: String, required: true },
    Experience: { type: Number, required: true },
    Location: { type: String, required: true },
    Date: { type: Date },   //backend
    Slots: { type: Number, required: true },
    Fees: { type: Number, required: true }
})

const AppointmentModel = mongoose.model("appointment", appointSchema)

module.exports ={AppointmentModel}