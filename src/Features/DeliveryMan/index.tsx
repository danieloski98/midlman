import React from 'react'
import { Switch, Route} from 'react-router-dom'
import Navbar from '../Dashboard/Component/Navbar'
import Sidebar from './Components/Sidebar'
import Home from './Pages/Home'
import Settings from './Pages/Settings'
import Statistics from './Pages/Statistics'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import { MenuContext, Value } from '../../Context/MenuContext'

export default function Index() {
    const menuContext: Value = React.useContext(MenuContext);

    return (
        <div className="w-full h-screen flex">
            <AnimatePresence>
            {
                menuContext.showModal &&  
                <motion.div 
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1, x: -1, transition: { type: 'spring', stiffness: 100, duration: 2} }}
                    exit={{ opacity: 0, x: -200 }} 
                    transition={{ type: "spring", stiffness: 100, duration: 2 }}
                    className="w-64 h-full z-10 shadow-lg">
                        <Sidebar />
                </motion.div>
            }
            </AnimatePresence>
            <div className="flex-1 bg-white z-0">
                <AnimateSharedLayout>
                    <motion.div layout className="px-8 py-2 w-full h-16 shadow-md">
                        <Navbar />
                    </motion.div>
                </AnimateSharedLayout>
                <div className="flex-1 px-8 py-10">
                    <Switch>
                        <Route path="/deliveryman" component={Home} exact />
                        <Route path="/deliveryman/statistics" component={Statistics} exact />
                        <Route path="/deliveryman/settings" component={Settings} exact />
                    </Switch>
                </div>
            </div>
        </div>
    )
}
