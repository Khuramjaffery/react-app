import { useState } from "react"

function User() {
    const [userName ,setuserName]=useState("khurram ali" )
    const [userAge ,setuserAge]=useState(27)
    const [userEmail ,setuserEmail]=useState("khurramjaffery12@gmail.com")
    const [userNumber ,setuserNumber]=useState("03054372019")
    const [userPassword ,setuserPassword]=useState("abc123")

  return (
    <>
   <h1>my name is {userName}</h1>
   <h1>my age is {userAge}</h1>
   <h1>my Email is {userEmail}</h1>
   <h1>my Number is {userNumber}</h1>
   <h1>my Password is {userPassword}</h1>
   </>
   
  )
}

export default User