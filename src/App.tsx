import logo from "./logo.svg";
import "./App.css";
import TypescriptForm from "./TypescriptForm";

function App(): JSX.Element {
  function sum(a: number, b: number): number {
    return a + b;
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          {sum(10, 5)}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <TypescriptForm />
      </header>
    </div>
  );
}

export default App;
