import { Col, Row } from "react-bootstrap";
import Link from "next/link";
import { useBreedImages, useBreeds } from "../lib/api";

const BreedListItem = ({ breed }) => {
  const { data } = useBreedImages(breed);
  const sampleImage = data?.data?.message?.[0];
  return (
    <Link href={`/breed/${breed}`}>
      <Row className="p-3 m-3 border rounded" style={{ cursor: "pointer" }}>
        {sampleImage && (
          <Col xs="4" sm="2" style={{ overflow: "hidden" }}>
            <img
              src={sampleImage}
              className="rounded"
              style={{ height: 150, width: 150, objectFit: "cover" }}
            />
          </Col>
        )}
        <Col xs="6" className="my-auto">
          <h2>{breed}</h2>
        </Col>
      </Row>
    </Link>
  );
};

export const BreedsList = () => {
  const { data, error } = useBreeds();
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>loading...</div>;
  const breeds = data.data.message;
  return (
    <>
      {Object.keys(breeds).map((breed) => (
        <BreedListItem key={breed} breed={breed} />
      ))}
    </>
  );
};
