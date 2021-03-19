import React, { useRef } from "react";
import { Col } from "react-bootstrap";
import { useBreedImages } from "../lib/api";
import { useAwesomeness } from "../contexts/Awesomeness";

export const BreedImagesList = ({ breedName }) => {
  const { data, error } = useBreedImages(breedName);
  const { celebrate } = useAwesomeness();

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  const images = data.data.message;

  return (
    <>
      {images.map((imageUrl) => (
        <Col
          key={imageUrl}
          xs={12}
          md={4}
          className="p-5 border"
          onClick={celebrate}
        >
          <img src={imageUrl} alt="" className="img-fluid" />
        </Col>
      ))}
    </>
  );
};
