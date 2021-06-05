import './App.css';
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          Dictionary App 
        </header>
        <Search />
        <small>
          <footer>
            Coded by Alexandra Sohlin
          </footer>
        </small>
      </div>
    </div>
  );
}

