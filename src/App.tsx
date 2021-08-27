import React from 'react';
import RootNavigation from './Navigation/Index'
import {RecoilRoot} from 'recoil'
import { QueryClientProvider, QueryClient } from 'react-query'
import MenuContext from './Context/MenuContext'

export const queryclient = new QueryClient();

export default function App() {
    return (
       <RecoilRoot>
         <MenuContext>
            <QueryClientProvider client={queryclient}>
               <RootNavigation />
            </QueryClientProvider>
         </MenuContext>
       </RecoilRoot>
    );
}
