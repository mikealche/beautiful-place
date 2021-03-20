import React, { useRef } from "react";
import { Col } from "react-bootstrap";
import { useBreedImages } from "../lib/api";
import { useAwesomeness } from "../contexts/Awesomeness";
import PettingsCounter from "./PettingsCounter";

export const BreedImagesList = ({ breed }) => {
  const { data, error } = useBreedImages(breed);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const images = data.data.message;

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
