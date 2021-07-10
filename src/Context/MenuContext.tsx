import React from 'react';

export interface Value {
    showModal: boolean;
    setShowModal: Function; 
}

export const MenuContext = React.createContext({} as Value);

const MenuContextWrapper = (props: any) => {
    const [showModal, setShowModal] = React.useState(false); 
    return (
        <MenuContext.Provider value={{showModal, setShowModal}}>
            {
                props.children
            }
        </MenuContext.Provider>
    )
}

export default MenuContextWrapper;