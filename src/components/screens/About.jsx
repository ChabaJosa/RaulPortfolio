import React from "react";
import { Container, Header, Grid, Menu } from "semantic-ui-react";
// import friscoImage from "../../img/frisco.jpg";

export default function About() {
  return (
    <>
      <Container>
        <Header size="huge" className="about-title">
          About
        </Header>
        <div className="img-container" id="aboutPhoto"></div>
        <section>
          <div>
            <p
              className="main-paragraph"
              style={{ maxWidth: "100%", paddingBottom: "1.5rem" }}
            >
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32. The
              standard chunk of Lorem Ipsum used since the 1500s is reproduced
              below for those interested. Sections 1.10.32 and 1.10.33 from "de
              Finibus Bonorum et Malorum" by Cicero are also reproduced in their
              exact original form, accompanied by English versions from the 1914
              translation by H. Rackham.
            </p>
          </div>
          <div className="btn-container" style={{ paddingBottom: "3rem" }}>
            <a href="/contact">
              <button class="ui violet button">Let's talk</button>
            </a>
          </div>
        </section>
        <section style={{ marginBottom: "3rem" }}>
          <Grid textAlign="center" columns={3}>
            <Grid.Row>
              <Grid.Column>
                <Menu fluid vertical>
                  <Menu.Item className="header grid-header">Skills</Menu.Item>
                  <Menu.Item>Poodle</Menu.Item>
                  <Menu.Item>Cockerspaniel</Menu.Item>
                  <Menu.Item>Poodle</Menu.Item>
                  <Menu.Item>Cockerspaniel</Menu.Item>
                </Menu>
              </Grid.Column>
              <Grid.Column>
                <Menu fluid vertical>
                  <Menu.Item className="header grid-header">
                    Experience
                  </Menu.Item>
                  <Menu.Item>Poodle</Menu.Item>
                  <Menu.Item>Cockerspaniel</Menu.Item>
                  <Menu.Item>Poodle</Menu.Item>
                  <Menu.Item>Cockerspaniel</Menu.Item>
                </Menu>
              </Grid.Column>
              <Grid.Column>
                <Menu fluid vertical>
                  <Menu.Item className="header grid-header">Tools</Menu.Item>
                  <Menu.Item>Poodle</Menu.Item>
                  <Menu.Item>Cockerspaniel</Menu.Item>
                  <Menu.Item>Poodle</Menu.Item>
                  <Menu.Item>Cockerspaniel</Menu.Item>
                </Menu>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </section>
      </Container>
    </>
  );
}
