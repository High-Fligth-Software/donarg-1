import React, {useState} from 'react';

export const ContextReload = React.createContext({

})

export default function ContextReloadProvider({children}){
    const [reload, setReload] = useState(false)
    return(
        <ContextReload.Provider
        value={{
            reload,
            setReload
        }}
        >
            {children}
        </ContextReload.Provider>
    )
}