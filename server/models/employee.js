const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    birthdate: Date,
    registerdate: Date,
    loginDateTime: Date,
    logoutDateTime: Date
})

const EmployeeModel = mongoose.model("employees", EmployeeSchema)
module.exports = EmployeeModel