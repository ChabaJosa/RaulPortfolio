import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Access from "../../img/Access.png";
import LanParty from "../../img/LAN-Party.png";
import F58 from "../../img/58-portfolio@3x.png";
import { Container } from "semantic-ui-react";

export default function Work() {
  return (
    <>
      <div className="container-3">
        <Container>
          <Carousel>
            <Carousel.Item>
              <img className="w-100" src={Access} alt="First slide" />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="w-100" src={LanParty} alt="Third slide" />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="w-100" src={F58} alt="Third slide" />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>
    </>
  );
}
