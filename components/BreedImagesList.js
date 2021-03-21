import React from "react";
import { Col } from "react-bootstrap";
import { useBreedImages } from "../lib/api";
import PettingsCounter from "./PettingsCounter";

export const BreedImagesList = ({ breed }) => {
  const { images, isLoading, error } = useBreedImages(breed);

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      {images.map((imageUrl, index) => (
        <Col key={imageUrl} xs={12} lg={4} className="p-5 border text-center">
          <PettingsCounter url={imageUrl} position={index} breed={breed}>
            <img
              src={imageUrl}
              style={{ height: 270, width: 270, objectFit: "cover" }}
            />
          </PettingsCounter>
        </Col>
      ))}
    </>
  );
};
