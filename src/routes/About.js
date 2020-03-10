import React from "react";

function About(props) {
  console.log(props.match.params);
  return (
    <div className="jumbotron">
      <h1>About Page</h1>
    </div>
  );
}

export default About;
