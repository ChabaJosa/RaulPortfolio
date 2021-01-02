import React from "react";
import { Container, Header } from "semantic-ui-react";
import circleImage from "../img/circle-pic.png";

const MainContainer = () => (
  <Container>
    <section>
      <div className="text-container">
        <Header size="huge" className="big-header">
          Random. Quote. Thinking About.
        </Header>
        <p className="main-paragraph">
          Hello there, nice to meet you! I am an International Business major
          and product Designer; I like to think of myself as a creative problem
          solver that loves the thrill of unravelling a challenge.
        </p>
      </div>
    </section>
    <section>
      <div className="img-container">
        <img
          className="ui medium circular image"
          src={circleImage}
          alt="Raul is supposed to be here"
        />
      </div>
      <div className="btn-container">
        <a href="/contact">
          <button class="ui violet button">Let's talk</button>
        </a>
      </div>
    </section>
  </Container>
);

export default MainContainer;
