import React from "react";
import { useRouter } from "next/router";
import { Col } from "react-bootstrap";
import Layout from "../../components/Layout";
import { BreedImagesList } from "../../components/BreedImagesList";
import { Title } from "../../components/TextUtils";

export default function BreedDetail() {
  const router = useRouter();
  const { breed } = router.query;

  return (
    <Layout>
      <Col xs="12">
        <Title> 🐶 {breed} 🐶</Title>
      </Col>
      <BreedImagesList breed={breed} />
    </Layout>
  );
}
