import React from "react";
import { Col } from "react-bootstrap";
import { useBreedImages } from "../lib/api";

export const BreedImagesList = ({ breedName }) => {
  const { data, error } = useBreedImages(breedName);
  if (error) return <div>Failed to load, {getBreedUrl(breedName)}</div>;
  if (!data) return <div>loading...</div>;

  const images = data.data.message;
  return (
    <>
      {images.map((imageUrl) => (
        <Col key={imageUrl} xs={4} className="p-5 border">
          <img src={imageUrl} alt="" className="img-fluid" />
        </Col>
      ))}
    </>
  );
};
