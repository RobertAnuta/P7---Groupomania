import { Link } from "react-router-dom";
import "./register.scss";
import { useState } from "react";

const Register = () => {

  const [inputs, setInputs] = useState({
    username:"",
    email:"",
    password:"",
    name:"",
  })

const handleChange = e => {
  setInputs(prev=>({...prev, [e.target.name]: e.target.values}))
}

console.log(inputs)

  return (
    <div className="register">
      <div className="card">
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder="Username" name="username" onChange={handleChange}/>
            <input type="email" placeholder="Email" name="email" onChange={handleChange}/>
            <input type="password" placeholder="Password" name="password" onChange={handleChange}/>
            <input type="text" placeholder="Name" name="name" onChange={handleChange}/>
            <button>Register</button>
          </form>
        </div>
        <div className="left">
          <h1>Groupomania Social Network</h1>
          <span>Do you have an account?</span>
          <Link to="/login">
          <button>Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
