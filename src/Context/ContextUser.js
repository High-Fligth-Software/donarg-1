import React, {useState} from 'react';

export const ContextUser = React.createContext({

})

export default function ContextUserProvider({children}){
    const [userData, setUserData] = useState({})
    //useEffect(()=>{console.log(userData)},[userData])
    return(
        <ContextUser.Provider
        value={{
            userData,
            setUserData
        }}
        >
            {children}
        </ContextUser.Provider>
    )
}