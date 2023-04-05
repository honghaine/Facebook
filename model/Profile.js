const db = require('../utils/PoolConnection');


class Profile {
    constructor(email, fname, lname, password) {
        this.email = email;
        this.fname = fname;
        this.lname = lname;
        this.password = password;
    }

   async save() {
        await db.execute('INSERT INTO profile(email, firstname, lastname, password) VALUES (?)', [
            this.email,
            this.fname,
            this.lname,
            this.password
        ]);
    }

}