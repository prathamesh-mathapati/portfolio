import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";

const Banner = () => {
  const [loopNum, setloopNum] = React.useState(0);
  const [isDeleting, setIsdeleting] = React.useState(false);
  const [text, setText] = React.useState("");
  const toRotate = ["Web Developer", "Web Desingner", "React js"];
  const [delte, setDelte] = React.useState(300 - Math.random() * 100);
  const period = 200;
  React.useEffect(() => {
    let tricker = setInterval(() => {
      trick();
    }, delte);

    return () => {
      clearInterval(tricker);
    };
  }, [text]);

  const trick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updateText);
    if (isDeleting) {
      setDelte((prevDelte) => prevDelte / 2);
    }
    if (!isDeleting && updateText === fullText) {
      setIsdeleting(true);
      setDelte(period);
    } else if (isDeleting && updateText === "") {
      setIsdeleting(false);
      setloopNum(loopNum + 1);
      setDelte(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aline-item-center">
          <Col lg="6" sm="12" md="6" xl="7">
            <span>Welcome to my portfolio</span>
            <h1>
              {"Hello I'm Prathamesh "}
              <span>{text}</span>
            </h1>
            <p>
              Motivated React JS developer with 1.5 years of experience, skilled
              in creating dynamic web applications, Redux state management, and
              RESTful API integration. Experienced in optimizing performance and
              ensuring code quality through testing and debugging. Seeking a
              collaborative environment to contribute technical skills,
              creativity, and passion for exceptional user experiences{" "}
            </p>
            <button>Let's connect</button>
          </Col>
          <Col lg="6" sm="12" md="6" xl="5">
            <img src={headerImg} alt="headder ing" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
