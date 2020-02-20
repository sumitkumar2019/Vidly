import React from "react";
import "./App.css";
import Movies from "./components/movies";

function App() {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-md navbar-dark bg-warning fixed-top p">
        <span className="navbar-brand bg-dark p-3">Vidly</span>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
      <main role="main" className="container mx-auto mt-5 pt-5">
        <Movies />
      </main>
    </React.Fragment>
  );
}

export default App;
