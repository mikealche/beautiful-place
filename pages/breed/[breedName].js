import React from "react";
import { useRouter } from "next/router";
import { Col } from "react-bootstrap";
import Layout from "../../components/Layout";
import Title from "../../components/Title";
import { BreedImagesList } from "../../components/BreedImagesList";

export default function BreedDetail() {
  const router = useRouter();
  const { breedName } = router.query;

  return (
    <Layout>
      <Col xs="12">
        <Title> 🐶 {breedName} 🐶</Title>
      </Col>
      <BreedImagesList breedName={breedName} />
    </Layout>
  );
}
