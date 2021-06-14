import './App.css';
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
           Dictionary 
        </header>
        <Search defaultKeyword="coffee"/>
        <small>
          <footer>
            This project is <a href="https://github.com/Sohlina/react-dictionary-app" target="_blank" rel="noreferrer">Open-sourced on Github</a> <br />Coded by Alexandra Sohlin
          </footer>
        </small>
      </div>
    </div>
  );
}

