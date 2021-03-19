import useSWR from "swr";
import axios from "axios";

const BREEDS_URL = "https://dog.ceo/api/breeds/list/all";
export const useBreeds = () => useSWR("breeds", () => axios.get(BREEDS_URL));

const getBreedUrl = (breed) => `https://dog.ceo/api/breed/${breed}/images`;
export const useBreedImages = (breed) =>
  useSWR(breed, () => axios.get(getBreedUrl(breed)));
