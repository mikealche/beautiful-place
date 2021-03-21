import { Row } from "react-bootstrap";
import { useBreeds } from "../lib/api";
import { BreedListItem } from "./BreedListItem";

export const BreedsList = () => {
  const { breeds, isLoading, error } = useBreeds();

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <Row>
      {Object.keys(breeds).map((breed) => (
        <BreedListItem key={breed} breed={breed} />
      ))}
    </Row>
  );
};
