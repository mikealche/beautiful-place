import useSWR from "swr";
import axios from "axios";

const BREEDS_URL = "https://dog.ceo/api/breeds/list/all";
export const useBreeds = () => useSWR("breeds", () => axios.get(BREEDS_URL));

const getBreedUrl = (breedName) =>
  `https://dog.ceo/api/breed/${breedName}/images`;
export const useBreedImages = (breedName) =>
  useSWR(breedName, () => axios.get(getBreedUrl(breedName)));
