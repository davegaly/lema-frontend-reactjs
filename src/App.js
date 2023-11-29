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

        <div id="kt_app_header" class="app-header d-flex flex-column flex-stack ">
            header
        </div>

        <div class="app-wrapper flex-column flex-row-fluid" id="kt_app_wrapper">

          <div id="kt_app_sidebar" class="app-sidebar flex-column" data-kt-drawer="true" data-kt-drawer-name="app-sidebar" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="250px" data-kt-drawer-direction="start" data-kt-drawer-toggle="#kt_app_sidebar_mobile_toggle">
              <div class="d-flex flex-column justify-content-between h-100 hover-scroll-overlay-y my-2 mx-5 d-flex flex-column" id="kt_app_sidebar_main" data-kt-scroll="true" data-kt-scroll-activate="true" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_app_header" data-kt-scroll-wrappers="#kt_app_main">
                  <div id="#kt_app_sidebar_menu" data-kt-menu="true" data-kt-menu-expand="false" class="flex-column-fluid menu menu-sub-indention menu-column menu-rounded menu-active-bg mb-7">
                  <NavLink exact to="/" activeClassName="active">
                    Dashboard
                  </NavLink>
                  <NavLink exact to="/dept" activeClassName="active">
                    Departments
                  </NavLink>
                  </div>
              </div>
          </div>

          <div class="app-main flex-column flex-row-fluid " id="kt_app_main">
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/dept" element={<AdminDepartmentsPage />} />
            </Routes>
          </div>

        </div>
       
      </Router>
    </PrimeReactProvider>
  );
}
