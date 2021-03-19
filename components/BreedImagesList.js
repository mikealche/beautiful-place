import React, { useRef } from "react";
import { Col } from "react-bootstrap";
import { useBreedImages } from "../lib/api";
import Confetti from "react-canvas-confetti";

export const BreedImagesList = ({ breedName }) => {
  const { data, error } = useBreedImages(breedName);
  const confetti = useRef(null);
  if (error) return <div>Failed to load, {getBreedUrl(breedName)}</div>;
  if (!data) return <div>loading...</div>;

  const images = data.data.message;

  const celebrate = (e) => {
    confetti.current({
      particleCount: 500,
      origin: {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      },
      spread: 360,
    });
  };
  return (
    <>
      <Confetti
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          zIndex: -1,
          top: 0,
          left: 0,
        }}
        refConfetti={(refVal) => (confetti.current = refVal)}
      />
      {images.map((imageUrl) => (
        <Col key={imageUrl} xs={4} className="p-5 border" onClick={celebrate}>
          <img src={imageUrl} alt="" className="img-fluid" />
        </Col>
      ))}
    </>
  );
};
