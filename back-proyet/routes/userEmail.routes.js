
const userEmailController= require('../controllers/userEmail.controller')
const router = require('express').Router()

router.post(
    '/signup',userEmailController.signUp
)
module.exports = router