import React from "react";
import "./styles.css";

export default class Student extends React.Component {
  componentWillUnmount() {
    // button ko click krne pr ye alert show karega
    alert("componentWillUnmountc called");
  }

  render() {
    return (
      <div className="App">
        <h4>component-Will-Unmouting</h4>
      </div>
    );
  }
}
