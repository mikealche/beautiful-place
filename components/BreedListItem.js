import { Col, Row } from "react-bootstrap";
import { useBreedImages } from "../lib/api";
import Link from "next/link";

const BreedSampleImage = ({ breed }) => {
  const { data } = useBreedImages(breed);
  const sampleImage = data?.data?.message?.[0];
  if (!sampleImage) return null;
  return (
    <img
      src={sampleImage}
      className="rounded"
      style={{ height: 150, width: 150, objectFit: "cover" }}
    />
  );
};

export const BreedListItem = ({ breed }) => {
  return (
    <Link href={`/breed/${breed}`}>
      <Col md={6}>
        <Row className="p-3 m-3 border rounded" style={{ cursor: "pointer" }}>
          <Col xs="5" style={{ overflow: "hidden" }}>
            <BreedSampleImage breed={breed} />
          </Col>
          <Col xs="7" className="my-auto">
            <h2>{breed}</h2>
          </Col>
        </Row>
      </Col>
    </Link>
  );
};
