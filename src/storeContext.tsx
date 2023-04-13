import React from 'react';
import {store, StorePropsType} from "./redux/state";


const StoreContext = React.createContext({} as StorePropsType)

export type ProviderType = {
    store: StorePropsType
    children: any
}

const Provider = (props: ProviderType) => {
    return(
        <StoreContext.Provider
            value={store}>
            {props.children}
            </StoreContext.Provider>
    )
}


export default StoreContext;