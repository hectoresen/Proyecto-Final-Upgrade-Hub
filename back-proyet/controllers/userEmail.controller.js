const UserGmail = require("../models/user.model");
const {v4:uuidv4} = require("uuid");
const {getToken,getTokenData} = require('../config/jwt.config');
const { getTemplate, sendEmail } = require("../config/mail.config");
const signUp = async (req, res) => {
  try {
    //obtener la data del usuario name y email
    const { name, email } = req.body;

    //verificar que el usuario no existe

    let usuario = (await UserGmail.findOne({ email })) || null;

    if (usuario !== null) {
      return res.json({
        success: false,
        msg: "el usuario ya existe",
      });
    }

    //generar el codigo

    const code = uuidv4();

    //crear un nuevo usuario
    usuario = new UserGmail({ name, email, code });

    //generar token
    const token = getToken({email,code})

    //obtener el template
    const template = getTemplate(name,token)


    //enviar el email

await sendEmail(email,'este es un email de prueba',template)
await UserGmail.bulkSave()
res.json({
    succes:true,
    msg:'Registrado correctamente'
})

  } catch (error) {
    console.log(error);
    return res.json({
      succes: false,
      msg: "error al registrar usuario",
    });
  }
};

module.exports={
    signUp
}