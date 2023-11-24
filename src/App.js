import React from 'react';
import './style.css';
import { BrowserRouter as Router, Route, Routes, NavLink  } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';
import { Button } from 'primereact/button';  
import { Dropdown } from 'primereact/dropdown';
import "primereact/resources/themes/lara-light-cyan/theme.css";

import DashboardPage from './pages/dashboardPage';
import AdminDepartmentsPage from './pages/adminDepartmentsPage';

export default function App() {

  return (
    <PrimeReactProvider>
      <Router>
      <div>
          <nav>
            <ul>
              <li>
              <NavLink exact to="/" activeClassName="active">
                Dashboard
              </NavLink>
              </li>
              <li>
              <NavLink exact to="/dept" activeClassName="active">
                Departments
              </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/dept" element={<AdminDepartmentsPage />} />
        </Routes>
      </Router>
    </PrimeReactProvider>
  );
}
