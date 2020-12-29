import React from "react";
import { Container } from "semantic-ui-react";
import Access from "../img/Access.png";
import LanParty from "../img/LAN-Party.png";
import F58 from '../img/58-portfolio@3x.png'

const MainContainer = () => (
  <Container>
    <div className="text-container second-background">
      <img src={Access} alt="pic here" />
      {/* <div className="ui three column grid">
        <div className="column">
          <div className="ui segment">
            <img src="" alt="pic here" />
          </div>
        </div>
        <div className="column">
          <div className="ui segment">
            <img src="" alt="pic here" />
          </div>
        </div>
        <div className="column">
          <div className="ui segment">
            <img src="" alt="pic here" />
          </div>
        </div>
      </div> */}
    </div>
    <section className="other-container">
      <div class="ui two column grid">
        <div class="row">
          <div class="column">
            <img src={F58} alt="pic here" />
          </div>
          <div class="column">
            <img src={LanParty} alt="pic here" />
          </div>
        </div>
        <div class="row">
          <div class="column">
            <img src={F58} alt="pic here" />
          </div>
          <div class="column">
            <img src={LanParty} alt="pic here" />
          </div>
        </div>
      </div>
    </section>
  </Container>
);

export default MainContainer;
