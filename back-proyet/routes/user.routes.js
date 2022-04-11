const express = require('express');
const authMiddleware = require('../middlewares/auth.middleware');
const usersController = require('../controllers/users.controllers');
const { changeEmail } = require('../controllers/users.controllers');
const {isAdmin} = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/register', usersController.registerPost);
router.post('/login', usersController.loginPost);
router.post('/logout', usersController.logoutPost);
router.get('/check-session', usersController.checkSession);
router.put('/edit/:id', usersController.changeEmail);

module.exports = router;