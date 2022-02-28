import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
  return (
    <div className="app">
        <Header />
        <div className="dashboard-page-one">
          <Sidebar />
          <div className="dashboard-content-one">
            <Breadcrumbs />
            <Dashboard />
            <Footer />
          </div>
        </div>
    </div>
  );
}

export default App;
