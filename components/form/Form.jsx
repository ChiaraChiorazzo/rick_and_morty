import style from "./form.module.css"
import React from "react"
import {validate} from "./validation"

export default function Form (props) {
const [userData, setUserData] = React.useState ({username:"", password:""})
const [errors, setErrors] = React.useState ({username:"", password:""})


function handleInputChange (evento){
    const value = evento.target.value
    const property = evento.target.name
    setUserData ({...userData, [property]: value})
    setErrors (validate({...userData, [property]:value}))
    
}
function handleSubmit (evento){
evento.preventDefault ();
props.login(userData)
}

    return (
        <div>
            <form  onSubmit={handleSubmit}>
                <label htmlFor="username">USUARIO:</label>
                <input type="text" name="username" value= {userData.username} onChange={handleInputChange}/>
                <p>{errors.username}</p>

                <label htmlFor="password">CONTRASEÑA:</label>
                <input type="password" name="password"  value={userData.password} onChange={handleInputChange}/>
                <p>{errors.password}</p>
                <button type="submit" >LOGIN</button>
            </form>
        </div>
    )
}