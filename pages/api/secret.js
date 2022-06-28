const jwt = require('jsonwebtoken');
const KEY = 'dfkjsldfjsldfjdslk'

const secret = (req, res) => {
    const {token} = req.body;
    const {admin} = jwt.verify(token, KEY)
    if(admin){
        res.json({
            secretAdminCode: 12345
        })
    } else {
        res.json({
            admin: false
        })
    }
}

export default secret