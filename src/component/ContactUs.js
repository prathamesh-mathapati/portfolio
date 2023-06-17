import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import contact from "../assets/img/contact-img.svg";

const ContactUs = () => {
  const fromInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [fromDetails, setFromDetails] = React.useState(fromInitialDetails);
  const [buttonText, setButtonText] = React.useState("Send");
  const [status, setStatus] = React.useState({});

  const onFromUpdate = () => {
    // setFromDetails({ ...fromDetails, [category]: value });
  };

  const handleSubmit = async (e) => {
    e.preventdefault();
    setButtonText("Sending...");
    let reponse = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: { "content-type": "Application/json;charset-8" },
      body: JSON.stringify(fromDetails),
    });
    setButtonText("send");
    let result = reponse.json();
    setFromDetails(fromInitialDetails);
    if (result.code === 200) {
      setStatus({ success: true, message: "message sent successfully" });
    } else {
      setStatus({
        success: false,
        message: "Some thing wrong ,plese try again ",
      });
    }
  };
  return (
    <section className="contact">
      <Container>
        <Row>
          <Col md={6}>
            <img src={contact} alt="contact" />
          </Col>
          <Col md={6}>
            <h2>Get in toch</h2>
            <from onSubmit={handleSubmit}>
              <Row>
                <Col className="px-1" sm={6}>
                  <input
                    type="text"
                    value={fromDetails?.firstName}
                    onChange={(e) => onFromUpdate("firstName", e.target.value)}
                    placeholder="Frist name"
                  />
                </Col>
                <Col className="px-1" sm={6}>
                  <input
                    type="text"
                    value={fromDetails?.lastName}
                    onChange={(e) => onFromUpdate("lastName", e.target.value)}
                    placeholder="Last name"
                  />
                </Col>
                <Col className="px-1" sm={6}>
                  <input
                    type="text"
                    value={fromDetails?.email}
                    onChange={(e) => onFromUpdate("email", e.target.value)}
                    placeholder="Last name"
                  />
                </Col>
                <Col className="px-1" sm={6}>
                  <input
                    type="text"
                    value={fromDetails?.phone}
                    onChange={(e) => onFromUpdate("phone", e.target.value)}
                    placeholder="Phone no"
                  />
                </Col>
                <Col>
                  <textarea
                    row={6}
                    value={fromDetails?.message}
                    onChange={(e) => onFromUpdate("message", e.target.value)}
                    placeholder="message"
                  />
                  <button type="submit">
                    <sapn>{buttonText}</sapn>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p
                      className={status.status === false ? "danger" : "success"}
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </from>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ContactUs;
