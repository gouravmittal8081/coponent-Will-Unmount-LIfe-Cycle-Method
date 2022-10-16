import React from "react";
import "./styles.css";
import Student from "./Student";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // yha ham by default ise true le rhe hai it means vo show hoga
      show: true
    };
  }

  render() {
    return (
      <div className="App">
        {
          //  if Agar vo this.state.show true hai to vo data pass karega else "There is no content" ye show karega
          this.state.show ? <Student /> : <h3>There is no content</h3>
        }

        {/* yha ham vhi condition de rhe hai jo abhi tak dete aaye hai ,ye setState ke under wala true ko false or false ko true karega */}
        <button onClick={() => this.setState({ show: !this.state.show })}>
          Toggle Child Component
        </button>
      </div>
    );
  }
}
