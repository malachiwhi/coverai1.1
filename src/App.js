import logo from './logo.svg';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import "@aws-amplify/ui-react/styles.css";
import { studioTheme } from "./ui-components";
import {Desktop1 } from './ui-components'; 
import { TextAreaField } from '@aws-amplify/ui-react';
import { DataStore } from '@aws-amplify/datastore';



function App() {

  return (
    <div className="App">
      <aside className="right">
        <h2>Cover Letter AI</h2>
      </aside>
      <div className='f-name'>
      <TextAreaField width="50%"/>
      </div> 
    </div>
  );
}

export default App;
