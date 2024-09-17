import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent constructor called");
  }

  componentDidMount() {
    console.log("Parent componentDidMount");
  }

  render() {
    console.log("Parent render called");

    return (
      <div>
        <h1>About Us</h1>
        <p>This is about us page from Namaste React</p>
        <UserClass name={"Kalyan Aithagoni"} location={"Bengaluru"} />
        <UserClass name={"Pavan"} location={"Nalgonda"} />
      </div>
    );
  }
}

export default About;