// const db = require('../utils/PoolConnection');

// class SignInProfile {
//     constructor(password) {
//         this.password = password;
//     }

//     async signIn() {
//         const [passwordAccount] = 
//         await db.query("SELECT password from profile where email = ?", this.email);
//         console.log(passwordAccount[0].password);
//         return passwordAccount[0].password;
        
//     }

//     async checkPassword() {       
//         let passwordEqual = await bcrypt.compare(inputPassword, this.signIn());
//         console.log(passwordEqual);
//         if(passwordEqual) {
//             return true;
//         } 
//         return false;
//     }

// }

// module.exports = SignInProfile;