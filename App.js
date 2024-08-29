const Heading = React.createElement(
  "div",
  { id: "title" },
  "Hello World from react!",[React.createElement(
    "h1",
    { id: "title" },
    "hello hyderabad!"),React.createElement(
      "h1",
      { id: "title" },
      "Hello benguluru !")]
);
console.log(Heading)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Heading);

