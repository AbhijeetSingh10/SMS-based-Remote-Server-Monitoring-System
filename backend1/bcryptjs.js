const bcrypt = require('bcryptjs');

const password = 'plainpassword';
const saltRounds = 10;

bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) throw err;
    console.log('Hashed password:', hash);
});
