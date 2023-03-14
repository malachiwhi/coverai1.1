import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welome to CoverAI </h1>
        <textarea className = "Fname">Enter First name</textarea> 
        <textarea className = "Lname">Enter Last name</textarea> 
        <textarea className = "Apply for "> Company and position that you are applying for </textarea>
        <textarea className = "positions" > Postion or related potions that you are applying for</textarea>
        <textarea className = "years" > Number of years or experience</textarea>
        <textarea className = "Skills and Projects" > Skills projects and certifications</textarea>
        <textarea className = "why" > Why you want the postion</textarea>
      </header>
    </div>
  );
}

export default App;
