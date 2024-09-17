import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        name: "Vinayaka",
        location: "Khirathabad",
      },
    };
    console.log(this.props.name + " Child constructor called");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/aithagoni2001");
    const json = await data.json();
    this.setState({ user: json });
    console.log("Child componentDidMount");
  }

  render() {
    const { name, location } = this.state.user;
    console.log(this.props.location + " Child render called");

    return (
      <div>
        <h2>{name}</h2>
        <p>{location}</p>
        <h3>508245</h3>
      </div>
    );
  }
}

export default UserClass;