import React, {useState} from "react";
import axios from "axios";

const Signup=()=>{

    const [user, setUser]= useState({name:"", email:"", password:"", confirmPassword:""})
    const [message, setMessage]= useState("");

    async function formSubmit(e){
        e.preventDefault();
        
        try{
            const response= await axios.post("https://instagram-express-app.vercel.app/api/auth/signup", {
            "name": user.name,
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
            <form onSubmit={formSubmit}>
                <input type="text" placeholder="Enter your name" onChange={(e)=>setUser({...user, name:e.target.value})}></input>
                <br/>
                <input type="email" placeholder="Enter email" onChange={(e)=>setUser({...user, email:e.target.value})}></input>
                <br/>
                <input type="password" placeholder="Enter password" onChange={(e)=>setUser({...user, password:e.target.value})}></input>
                <br/>
                <input type="password" placeholder="Confirm password" onChange={(e)=>setUser({...user, confirmPassword:e.target.value})}></input>
                <br/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Signup;