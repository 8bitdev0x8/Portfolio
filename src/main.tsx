import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'; // Import the Provider
import App from './App.tsx';
import { store } from './store'; // Import your store
import './index.css';

// Render the app with Redux Provider wrapping the App component
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}> {/* Wrap your App component with Provider */}
      <App />
    </Provider>
  </StrictMode>
);
