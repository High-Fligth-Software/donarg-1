import React, {useState} from 'react';

export const ContextFilter = React.createContext({

})

export default function ContextFiltrosProvider({children}){
    const [filtroTipoDePublicacion, setFiltroTipoDePublicacion] = useState(0)
    const [filtroMovilidad, setFiltroMovilidad] = useState(false)
    return(
        <ContextFilter.Provider
        value={{
            filtroTipoDePublicacion,
            setFiltroTipoDePublicacion,
            filtroMovilidad,
            setFiltroMovilidad
        }}
        >
            {children}
        </ContextFilter.Provider>
    )
}