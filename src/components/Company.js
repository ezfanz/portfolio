import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Company = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const workExperience = [
    {
      company: "ABC Corporation",
      title: "Web Developer",
      description:
        "Developed and maintained web applications for clients. Collaborated with cross-functional teams to deliver high-quality products.",
      image: meter1,
    },
    {
      company: "XYZ Design Studio",
      title: "Brand Identity Specialist",
      description:
        "Designed brand identities for various clients, ensuring consistency and alignment with their vision and goals.",
      image: meter2,
    },
    {
      company: "123 Creative Agency",
      title: "Logo Designer",
      description:
        "Created unique and memorable logos for clients, incorporating their brand values and target audience preferences.",
      image: meter3,
    },
    // Add more entries as needed
  ];

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Work Experience</h2>
              <br></br>
              {workExperience.map((experience, index) => (
              <div key={index}>
                <h5 style={{ textAlign: 'left' }}>{`${index + 1}. ${experience.company} - ${experience.title}`}</h5>
                <p style={{ textAlign: 'left' }}>{experience.description}</p>
              </div>
            ))}
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Background" />
      <br></br>
    </section>

  
  );
};