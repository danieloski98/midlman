import React from 'react';

export interface Value {
    showModal: boolean;
    setShowModal: Function; 
}

export const MenuContext = React.createContext({} as Value);

const MenuContextWrapper = (props: any) => {
    // animation hooks
    const [showModal, setShowModal] = React.useState(true); 
    
    return (
        <MenuContext.Provider value={{showModal, setShowModal }}>
            {
                props.children
            }
        </MenuContext.Provider>
    )
}

export default MenuContextWrapper;