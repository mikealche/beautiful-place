import React from "react";
import { Col, Container, Row } from "react-bootstrap";

export default function Layout({ children }) {
  return (
    <Container className="pt-5">
      <Row className="pt-5">{children}</Row>
    </Container>
  );
}
