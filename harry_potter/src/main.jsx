import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './utils/Store'
import './index.css'
import App from './App.jsx'

// Root entry point of the application
// Provider wraps the app to make Redux store available to all components
createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <App />
    </Provider>
)
