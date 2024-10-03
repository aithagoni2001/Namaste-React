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
    // console.log(this.props.name + " Child constructor called");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/aithagoni2001");
    const json = await data.json();
    console.log(json);
    
    this.setState({ user: json });
    // console.log("Child componentDidMount");
  }

  render() {
    const { name, location,avatar_url, bio,login} = this.state.user;
    // console.log(this.props.location + " Child render called");

    return (
      <div className="gitprofile m-4 p-2 border border-solid border-black w-[250px] bg-gray-100 rounded-lg">
        <img className="profilepic w-[200px] rounded-lg" src={avatar_url} alt="Not found"/>
        <h2 className="font-bold text-lg py-2">{name}</h2>
        <h2>{login}</h2>
        <h4>{bio}</h4>
        <p>{location}</p>
        <h3>508245</h3>
      </div>
    );
  }
}

export default UserClass;