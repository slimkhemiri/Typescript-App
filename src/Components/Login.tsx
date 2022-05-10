
import { useState } from 'react'
import '../App.css';
interface userProps  {
    name: string
    password:string
}

const Login = () => {
   
   
   const [login,setLogin] = useState<userProps|null>(null)
   

  const handleClick =()=>{
setLogin({
    name:"slim",
    password:"slim123"
})
console.log(login)
   }
  return (
    <div className="container">
    <div className="body-form"> 
       <form>
           <label>Login</label>
          <div className="input-group mb-3">

<input type="text" className="form-control" placeholder="Username" />
</div>
<div className="input-group mb-3">

<input type="text" className="form-control" placeholder="Password" />
</div>
<button type="button" className="btn btn-secondary btn-block" onClick={handleClick}>LOGIN</button>
<div>{login?.name} </div>
</form>
       </div>
        </div>    
  )
}

export default Login;