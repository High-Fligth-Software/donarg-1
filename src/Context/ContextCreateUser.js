import React, {useState} from 'react';

export const ContextCreateUser = React.createContext({

})

export default function ContextCreateUserProvider({children}){
    const [userData, setUserData] = useState('Hola mundo')
    return(
        <ContextCreateUser.Provider
        value={{
            userData,
            setUserData
        }}
        >
            {children}
        </ContextCreateUser.Provider>
    )
}