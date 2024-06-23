const jwt = require('jsonwebtoken');

const secret = 'umersohail';

function setuser(email, password) {
    const payload = {
        email: email,
        password: password
    };

    return jwt.sign(payload, secret);
}

function getuser(token) {
    if (!token) return null;
    try {
        return jwt.verify(token, secret);
    } catch (error) {
        console.error('JWT Verification Error:', error.message);
        return null;
    }
}

module.exports = {
    setuser: setuser,
    getuser: getuser
};
