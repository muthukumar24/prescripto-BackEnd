const express = require('express');
const { loginAdmin, appointmentsAdmin, appointmentCancel, addDoctor, removeDoctor, updateDoctor, allDoctors, adminDashboard } = require('../controllers/adminController.js');
const { changeAvailablity } = require('../controllers/doctorController.js');
const authAdmin = require('../middleware/authAdmin.js');
const upload = require('../middleware/multer.js');
const adminRouter = express.Router();

adminRouter.post("/login", loginAdmin)
adminRouter.post("/add-doctor", authAdmin, upload.single('image'), addDoctor)
adminRouter.post('/remove-doctor', authAdmin, removeDoctor)
adminRouter.put('/update-doctor/:id', authAdmin,upload.single('image'), updateDoctor)
adminRouter.get("/appointments", authAdmin, appointmentsAdmin)
adminRouter.post("/cancel-appointment", authAdmin, appointmentCancel)
adminRouter.get("/all-doctors", authAdmin, allDoctors)
adminRouter.post("/change-availability", authAdmin, changeAvailablity)
adminRouter.get("/dashboard", authAdmin, adminDashboard)


module.exports = adminRouter;