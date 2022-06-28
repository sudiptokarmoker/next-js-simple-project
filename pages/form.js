import {useState} from 'react';
const jwt = require('jsonwebtoken');

const form = (req, res) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('Not logged in');
  const [secret, setSecret] = useState('');

  const FormSubmit = async (event) => {
    event.preventDefault();
    const res = await fetch(`/api/login`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username,
        password})
    }).then( (t) => t.json());

    const token = res.token;
    if(token){
      const json = jwt.decode(token);
      console.log(json);
      setMessage(`Welcome ${json.username} and you are ${json.admin ? 'you are admin' : 'you are not admin'}`);

      const resnew = await fetch(`/api/secret`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({token})
      }).then( (t) => t.json());

      if(resnew.secretAdminCode){
        setSecret(resnew.secretAdminCode)
      } else {
        setSecret('Nothing secret')
      }
    } else {
      setMessage('Something went wrong');
    }
  }

  return (
    <>
      <h1>{message}</h1>
      <h2> Secret: {secret} </h2>
      <form onSubmit={FormSubmit}>
        <input type="text" name="username" placeholder="username" value={username} onChange={ (e) => setUsername(e.target.value)}/>
        <br/>
        <input type="password" name="password" placeholder="password" value={password} onChange={ (e) => setPassword(e.target.value)}/>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default form