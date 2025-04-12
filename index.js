import React from 'react';
import App from './pages/App';
import ReactDOM from 'react-dom/client';

function Root() {
  return (
    <div>
      <App />
    </div>
  );
}
const root= ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);
export default Root;