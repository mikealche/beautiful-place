import { Row } from "react-bootstrap";
import { useBreeds } from "../lib/api";
import { BreedListItem } from "./BreedListItem";

export const BreedsList = () => {
  const { data, error } = useBreeds();
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>loading...</div>;
  const breeds = data.data.message;

  return (
    <Row>
      {Object.keys(breeds).map((breed) => (
        <BreedListItem key={breed} breed={breed} />
      ))}
    </Row>
  );
};
