import React, { Suspense } from 'react';
import './App.css';
import routes from './routes'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
  
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}> {/* Optional: Show loading while components are loading */}
          <Routes>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={route.element}
              />
            ))}
          </Routes>
        </Suspense>
      </div>
    
  );
}

export default App;
