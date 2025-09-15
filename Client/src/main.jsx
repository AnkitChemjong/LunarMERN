import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.jsx'
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';
import {QueryClient,QueryClientProvider} from "@tanstack/react-query"

const queryClient=new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
    <QueryClientProvider client={queryClient}>
    <Provider store={store}>
        <ToastContainer/>
        <App />
    </Provider>
    </QueryClientProvider>

)
