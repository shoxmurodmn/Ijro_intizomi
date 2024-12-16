import { useState } from "react"

const User =()=>{
      const [login, setLogin]= useState(false)
      const users = "Murod"

      const userVerification =()=>{
            setLogin(users)
      }

      return(
            <div>
     
                  <h1 style={{fontSize: "22px"}}>{login ? users: "log in"}</h1>
            </div>
      )
}
export default User