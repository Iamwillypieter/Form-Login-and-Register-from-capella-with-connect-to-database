const express = require("express");
const mongoose = require('mongoose');
// const router = express.Router();
const cors = require("cors");
const EmployeeModel = require('./models/employee');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/employee");

// router.get('/users', async (req, res) => {
//     try {
//         const users = await EmployeeModel.find();
//         res.json(users);
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: "Server Error" });
//     }
// });

// module.exports = router;

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    EmployeeModel.findOne({ email: email })
        .then(async user => {
            if (user) {
                if (user.password === password) {
                    await EmployeeModel.findOneAndUpdate({ email: email }, { $set: { loginDateTime: Date.now(), statusLogin: true} }, { new: true })
                    res.json("Success")
                } else {
                    res.json("Password is incorrect")
                }
            } else {
                res.json("Account didn't found")
            }
        })
})

// logoutDatabase tidak terekam di database
// app.post('/home', (req, res) => {
//     const { email } = req.body;
//     EmployeeModel.findOneAndUpdate({ email: email })
//         .then(async updatedUser => {
//             if (updatedUser) {
//                 await EmployeeModel.findOneAndUpdate({ email: email }, { $set: { logoutDateTime: Date.now() } }, { new: true })
//                 res.json("Logout time recorded successfully");
//             } else {
//                 res.status(404).json("User not found");
//             }
//         })
//         .catch(error => {
//             console.error("Error occurred while updating logout time:", error);
//             res.status(500).json("Internal Server Error");
//         });
// });



// logoutDataTime terekam di Database
app.post('/home', (req, res) => {
    const { email } = req.body;
    EmployeeModel.findOneAndUpdate({ email: email }, { $set: { logoutDateTime: Date.now(), statusLogin: false }}, { new: true })
        .then(updatedUser => {
            if (updatedUser) {
                res.json("Logout time recorded successfully");
            } else {
                res.status(404).json("User not found");
            }
        })
        .catch(error => {
            console.error("Error occurred while updating logout time:", error);
            res.status(500).json("Internal Server Error");
        });
});

app.post('/register', (req, res) => {
    console.log(req.body)
    EmployeeModel.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        birthdate: req.body.birthdate,
        registerdate: Date.now()
    })
        .then(employees => res.json(employees))
        .catch(err => res.json(err));
});

app.listen(3000, () => {
    console.log("server is running");
});
