import React from 'react';
import {StorePropsType} from "./redux/state";


const StoreContext = React.createContext({} as StorePropsType)

export type ProviderType = {
    store: StorePropsType
    children: any
}




export default StoreContext;