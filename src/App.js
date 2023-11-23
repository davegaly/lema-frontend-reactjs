import React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';
import { Button } from 'primereact/button';  
import { Dropdown } from 'primereact/dropdown';
import "primereact/resources/themes/lara-light-cyan/theme.css";

import DashboardPage from './pages/dashboardPage';
import AdminDepartmentsPage from './pages/adminDepartmentsPage';

export default function App() {

  return (
    <PrimeReactProvider>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/dept" element={<AdminDepartmentsPage />} />
      </Routes>
      <div>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic ha Aasdf :)</p>
        <p><Button label="Submit" onClick={() => {alert('Hello, React!');}} /></p>
      </div>
    </PrimeReactProvider>
  );
}
