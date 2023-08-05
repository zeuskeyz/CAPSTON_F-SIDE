import { createContext, useEffect, useState } from 'react'
import axios from 'axios'

const AuthContext = createContext()

export function Authenticator({children}) {
    const [user, setUser] = useState({})
   
    useEffect(()=>{
        axios.get('https://server-r8hb.onrender.com/api/loggedIn').then(result => setUser(result.data))
    }, [])

    return (
        <AuthContext.Provider value={{user}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext
