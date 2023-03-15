import logo from './logo.svg';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import "@aws-amplify/ui-react/styles.css";
import { FirstName, studioTheme } from "./ui-components";
import {Desktop1 } from './ui-components'; 
import { TextAreaField, ToggleButton } from '@aws-amplify/ui-react';
import { DataStore } from '@aws-amplify/datastore';
import { LastName } from './ui-components';
import { Component17 } from './ui-components';



function App() {

  return (
    <div className="App">
      <aside className="right">
        <h2>Cover Letter AI</h2>
      </aside>
      <div className='Input'> 
          <div className='f-name'>
            <TextAreaField label="First Name"resize='horizontal' />
          </div> 
          <div className ="lname"> 
            <TextAreaField label="Last Name" resize='horizontal' />
          </div>
          <div className='skills'> 
            <TextAreaField label="Skills, Projects, or certifications related to the desired position" resize='horizontal' /> 
          </div>
          <div className='Number of years'>
            <TextAreaField label='Number of years experince in the position' resize='horizontal' />
          </div>
          <div className = "Company"> 
            <TextAreaField label = "Company and position you are applying for: " resize='horizontal' /> 
          </div>
          <div>
            <TextAreaField label = "Why you are seeking this Position? What makes you an ideal Candidate" />
          </div>
          <div className='btn'>
            <ToggleButton size="small">Press me!</ToggleButton>
          </div>
      </div>
    </div>
  );
}

export default App;
