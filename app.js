import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header";

const App = () => (
  <div>
    <Header />
    <section className="section container content">
      <h1>Hello World</h1>
    </section>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
