import useSWR from "swr";
import axios from "axios";

const BREEDS_URL = "https://dog.ceo/api/breeds/list/all";
export const useBreeds = () => {
  const { data, error } = useSWR("breeds", () => axios.get(BREEDS_URL));
  if (error) return { error };
  if (!data) return { isLoading: true };
  return { breeds: data.data.message };
};

const getBreedUrl = (breed) => `https://dog.ceo/api/breed/${breed}/images`;

export const useBreedImages = (breed) => {
  const { data, error } = useSWR(breed, () => axios.get(getBreedUrl(breed)));
  if (error) return { error };
  if (!data) return { isLoading: true };
  return { images: data.data.message };
};
