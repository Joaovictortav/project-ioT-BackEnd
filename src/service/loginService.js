const database = require("../config/configDataBase.js");
const login = require('../models/registro_login')

database.sync();

function fazerLogin({ email, password }) {
    console.log('E-mail: ' + email + ' Senha: ' + password);
    try {
        // let SQL = `SELECT * FROM registro_login WHERE email='${email}'`;
    } catch (error) {
        console.log(error);
    }
}
module.exports = fazerLogin;



//       if (usuario.email === email && usuario.password === password)
//           return {
//               message: "Realizado com sucesso!",
//               status: 200,
//               headers: "",
//               body: "token laskjdfhaiosudf",
//           };
//       else
//           return {
//               message: "Usuário ou Senha inválidos",
//               status: 401,
//               body: "",
//           };