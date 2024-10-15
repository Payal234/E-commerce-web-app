import React from 'react'
import ShopContextProvider from './Components/Context/ShopContext';
import App from './App';
import './index.css'

const root =ReactDom.createRoot(document.getElementById('root'));
root.render(
    <ShopContextProvider>
        <App/>
    </ShopContextProvider>
);

    

