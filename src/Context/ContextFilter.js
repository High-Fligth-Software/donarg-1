import React, {useState} from 'react';

export const ContextFilter = React.createContext({

})

export default function ContextFiltrosProvider({children}){
    const [filtroTipoDePublicacion, setFiltroTipoDePublicacion] = useState(0)
    return(
        <ContextFilter.Provider
        value={{
            filtroTipoDePublicacion,
            setFiltroTipoDePublicacion
        }}
        >
            {children}
        </ContextFilter.Provider>
    )
}