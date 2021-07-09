import React from 'react';
import RootNavigation from './Navigation/Index'
import {RecoilRoot} from 'recoil'
import { QueryClientProvider, QueryClient } from 'react-query'

export const queryclient = new QueryClient();

export default function App() {
    return (
       <RecoilRoot>
         <QueryClientProvider client={queryclient}>
            <RootNavigation />
         </QueryClientProvider>
       </RecoilRoot>
    );
}
