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
    try {
      const data = await fetch("https://api.github.com/users/aithagoni2001");
      const json = await data.json();
      this.setState({ user: json });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
    // console.log("Child componentDidMount");
  }

  render() {
    const { name, location, avatar_url, bio, login } = this.state.user;

    return (
      <div>
        <div className="gitprofile m-4 p-2 border border-solid border-black w-[250px] bg-gray-200 rounded-lg mx-auto">
          <img
            className="profilepic w-[200px] rounded-lg text-center mx-auto"
            src={avatar_url}
            alt="Profile"
          />
          <h2 className="font-bold text-lg py-2">{name}</h2>
          <h2>{login}</h2>
          <h4>{bio}</h4>
          <p>{location}</p>
          <h3>508245</h3>
        </div>
      </div>
    );
  }
}

export default UserClass;
