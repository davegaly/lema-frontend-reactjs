import React from 'react';
import './style.css';
import { PrimeReactProvider } from 'primereact/api';
import { Button } from 'primereact/button';  
import { Dropdown } from 'primereact/dropdown';
import "primereact/resources/themes/lara-light-cyan/theme.css";

export default function App() {

  return (
    <PrimeReactProvider>
      <div>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic ha Aasdf :)</p>
        <p><Button label="Submit" onClick={() => {alert('Hello, React!');}} /></p>
      </div>
    </PrimeReactProvider>
  );
}
