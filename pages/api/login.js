const jwt = require('jsonwebtoken');
const KEY = 'dfkjsldfjsldfjdslk'

export default function handler(req, res) {
    if(!req.body){
        res.status(404).end('Error');
    }
    //const data = JSON.parse(req.body);
    //const {username, password} = JSON.parse(req.body);
    const {username, password} = req.body;

    res.json({
        token: jwt.sign({ 
            username: username,
            admin: username === 'admin' && password === 'admin'  
        }, KEY)
    })
  }
  