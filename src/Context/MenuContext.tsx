import React from 'react';
import { AnimationControls, useAnimation } from 'framer-motion'

export interface Value {
    showModal: boolean;
    setShowModal: Function; 
    control: AnimationControls;
}

export const MenuContext = React.createContext({} as Value);

const MenuContextWrapper = (props: any) => {
    // animation hooks
    const control = useAnimation();
    const [showModal, toggleShowModal] = React.useState(true); 

    const setShowModal = (value: boolean) => {
        control.start({
            transition: {duration: 1000, ease: 'easeInOut'}
        });
        toggleShowModal(value);
        control.stop();
    }
    
    return (
        <MenuContext.Provider value={{showModal, setShowModal, control }}>
            {
                props.children
            }
        </MenuContext.Provider>
    )
}

export default MenuContextWrapper;