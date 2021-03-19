import { Col, Row } from "react-bootstrap";
import Title from "../components/Title";
import Layout from "../components/Layout";
import { BreedsList } from "../components/BreedsList";

export default function Home() {
  return (
    <Layout>
      <Col xs={12}>
        <Title>The Most Beautiful Place on Earth</Title>
      </Col>
      <Col>
        <BreedsList />
      </Col>
    </Layout>
  );
}
