import {ChakraProvider} from "@chakra-ui/react";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import customTheme from "shared/src/theme/theme";
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <ChakraProvider theme={customTheme}>
            <App/>
        </ChakraProvider>
    </React.StrictMode>
);

reportWebVitals();
