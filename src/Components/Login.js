import React,{useState} from "react";
import axios from "axios";

const Login=()=>{

    const [user, setUser]= useState({email:"", password:""})
    const[message, setMessage]= useState("");

    function updateLogin(e){
        setUser({...user, [e.target.name]: e.target.value})
    }

    async function updateForm(e){
        e.preventDefault()
        try{
            const response= await axios.post("https://instagram-express-app.vercel.app/api/auth/login",{
                "email": user.email,
                "password": user.password,
            })
            console.log(response.data.message)
            setMessage(response.data.message)
        }
        catch(error){
            console.log(error.response.data.message)
            setMessage(error.response.data.message)
        }

    }
    return(
        <div>
            {
                message && (
                    <div>
                        <h1>{message}</h1>
                    </div>
                )
            }
            <form onSubmit={updateForm}>
                <input type="text" placeholder="Enter email" onChange={updateLogin} name="email"></input>
                <br></br>
                <input type="password" placeholder="Enter password" onChange={updateLogin} name="password"></input>
                <br></br>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;