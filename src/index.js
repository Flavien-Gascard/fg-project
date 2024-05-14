import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './Index.css';

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);

/*
Explanation
Import createRoot: Instead of using ReactDOM.render, you import createRoot from react-dom/client.
Create a Root Container: You call createRoot with the container element (document.getElementById('root')).
Render the App: Use the render method on the created root to render your application.

Additional Considerations
StrictMode: Wrapping your <App /> component with <React.StrictMode> is recommended as it helps highlight potential problems in your application.
Concurrent Features: React 18 introduces concurrent features which allow React to prepare multiple versions of your UI at the same time. This is the foundation for upcoming features like automatic batching, transitions, and more.
*/