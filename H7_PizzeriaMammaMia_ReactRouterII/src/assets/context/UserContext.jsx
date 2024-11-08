import { createContext, useState } from "react";


export const UserContext = createContext();


// eslint-disable-next-line react/prop-types
export const UserContextProvider = ( {children} ) => {
    const [token, setToken] = useState(true)

    const logout = ()=>{setToken(false)}
  return (
    <UserContext.Provider value = { {token, logout }}>
        {children}
    </UserContext.Provider>
  )
}