const passport = require("passport");
const { findByIdAndUpdate } = require("../models/User");
const User = require('../models/User');


module.exports = {
  checkSession: async (req, res, next) => {
      if(req.user) {
        let userRegister = req.user;
        userRegister.password = null;

        return res.status(200).json(userRegister);
      } else {
        return res.status(401).json({message: 'No user found'});
      }
  },

  registerPost: (req, res, next) => {
    console.log(req.body);
    const { password, email, passwordRepeat } = req.body;

    if(!password || !email ) {
      return res.status(400).json({ message: 'Completa todos los campos' });
    }

    if(password !== passwordRepeat ) {
      return res.status(400).json({ message: 'Las contraseñas no son iguales' });
    }

    passport.authenticate("register", (error, user) => {
      if (error) {
        return res.status(403).json({message: error.message});
      }

      req.logIn(user, (error) => {
        if (error) {
          return res.status(403).json({message: error.message});
        };

        let userRegister = user;
        userRegister.password = null;

        return res.json(userRegister);
      });
    })(req, res, next);
  },

  loginPost: (req, res, next) => {
    passport.authenticate("login", (error, user) => {
      if (error) {
        return res.status(401).json({message: error.message});
      }
      req.logIn(user, (error) => {
        if (error) {
          return res.status(403).json({message: error.message});
        };

        let userLogged = user;
        userLogged.password = null;

        return res.json(userLogged);
      });
    })(req, res, next);
  },

  logoutPost: (req, res, next) => {
    if (req.user) {
      req.logout();

      req.session.destroy(() => {
        res.clearCookie("connect.sid");

        return res.status(200).json({ message: 'Logout successful' });
      });
    } else {
      return res.status(401).json({ message: 'Unexpected error' });
    }
  },

  changeEmail: async (req, res, next) =>{
    try{
      const {id} = req.params;
      const {email, passoword} = req.body;
      const newUser = await User.findByIdAndUpdate(id,{$set:{email: email}});
      return res.status(200).json(newUser);
    }catch(error){
      return next(error);
    }
  }
};
