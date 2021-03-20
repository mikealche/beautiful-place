import { Col, Row } from "react-bootstrap";
import Layout from "../components/Layout";
import { BreedsList } from "../components/BreedsList";
import { Title, CoolText } from "../components/TextUtils";

export default function Home() {
  return (
    <Layout>
      <Col xs="12">
        <Title>
          The Dog's <CoolText>Gallery</CoolText>
        </Title>
        <Title>🦮 🐕‍🦺 🐕 🐩 </Title>
      </Col>
      <Col>
        <BreedsList />
      </Col>
    </Layout>
  );
}
