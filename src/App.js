import React from 'react';
import './App.css';
import CreateDashboard from './pages/CreateDashboard';
import DashboardContainer from './pages/DashboardContainer';
import Header from './pages/Header';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<DashboardContainer />} />
          <Route path='/dashboard' element={<DashboardContainer />} />
          <Route exact path='/create' element={<CreateDashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
