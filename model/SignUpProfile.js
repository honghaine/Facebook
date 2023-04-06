const db = require('../utils/PoolConnection');

class SignUpProfile {
    constructor(email, fname, lname, password) {
        this.email = email;
        this.fname = fname;
        this.lname = lname;
        this.password = password;
    }

   async save() {
        const data = [
            this.email,
            this.fname,
            this.lname,
            this.password
        ]
        const result = await db.query('INSERT INTO profile(email, firstname, lastname, password) VALUES (?)', [data]);
        return result;
    }

}

module.exports = SignUpProfile;