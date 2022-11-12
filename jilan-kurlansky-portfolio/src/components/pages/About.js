import React from "react";
import Card from "react-bootstrap/Card";

function About() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="./jilan-img.jpeg" />
      <Card.Body>
        <Card.Title>Bio</Card.Title>
        <Card.Text>
          Hi there! I currently work at Meta as a Client Solutions Manager on
          the Disruptors vertical. I took the plunge in '22 to pick up new
          skills and become a Full Stack Software Developer through the
          University of Pennsylvania's Bootcamp.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default About;
