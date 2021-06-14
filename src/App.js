import './App.css';
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <i className="fas fa-book-open"></i> Dictionary  
        </header>
        <Search defaultKeyword="coffee"/>
        <small>
          <footer>
            Coded by Alexandra Sohlin
          </footer>
        </small>
      </div>
    </div>
  );
}

