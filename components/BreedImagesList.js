import React, { useRef } from "react";
import { Col } from "react-bootstrap";
import { useBreedImages } from "../lib/api";
import { useAwesomeness } from "../contexts/Awesomeness";
import PettingsCounter from "./PettingsCounter";

export const BreedImagesList = ({ breedName }) => {
  const { data, error } = useBreedImages(breedName);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const images = data.data.message;

  return (
    <>
      {images.map((imageUrl) => (
        <Col key={imageUrl} xs={12} md={4} className="p-5 border">
          <PettingsCounter url={imageUrl}>
            <img src={imageUrl} alt="" className="img-fluid" />
          </PettingsCounter>
        </Col>
      ))}
    </>
  );
};
