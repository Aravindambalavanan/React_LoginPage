import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [userReg, setUserReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const[loginStatus,setLoginStatus]=useState("")

  const register = async () => {
    try {
      await axios
        .post("http://localhost:5000/register", {
          username: userReg,
          password: passwordReg,
        })
        .then((response) => {
          console.log(response);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const login = async () => {
    try {
      await axios
        .post("http://localhost:5000/login", {
          username: username,
          password: password,
        })
        .then((response) => {
          if(response.data.username){
            setLoginStatus(response.data.username)
          }
          else{
            const name = response.data[0].username
            setLoginStatus(name);
          }
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>
        <h2>Register</h2>
        <label htmlFor="">Username</label>
        <input type="text" onChange={(e) => setUserReg(e.target.value)} />
        <label htmlFor="">Password</label>
        <input type="text" onChange={(e) => setPasswordReg(e.target.value)} />
        <button onClick={register}>Register</button>
      </div>
      <div>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={login}>Login</button>
        <div>
          <h1>
            {loginStatus}
          </h1>
        </div>
      </div>
    </>
  );
}

export default App;
