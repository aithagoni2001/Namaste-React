import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    // console.log("Parent constructor called");
  }

  componentDidMount() {
    // console.log("Parent componentDidMount");
  }

  render() {
    // console.log("Parent render called");

    return (
      <div className="m-3 p-2">
        <h1>About Us</h1>
        <p>This is the about us page from Namaste React</p>
        {/* Rendering UserClass with different props */}
        <UserClass name={"Kalyan Aithagoni"} location={"Bengaluru"} />
        {/* Uncomment this line if you want to render another UserClass instance */}
        {/* <UserClass name={"Pavan"} location={"Nalgonda"} /> */}
      </div>
    );
  }
}

export default About;
