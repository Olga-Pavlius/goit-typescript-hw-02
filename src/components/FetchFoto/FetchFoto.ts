import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";

export type UnsplashPhoto = {
  id: string;
  description: string | null;
  alt_description: string | null;
  likes: number;
  urls: {
    small: string;
    regular: string;
  };
  user: {
    name: string;
    profile_image: {
      small: string;
    };
  };
};

export type UnsplashResponse = {
  total: number;
  total_pages: number;
  results: UnsplashPhoto[];
};

type Params = {
  query: string;
  client_id: string;
  orientation?: "portrait" | "landscape" | "squarish";
  per_page?: number;
  page?: number;
};

export const fetchFotoWithTopic = async (
  userQuery: string,
  page: number = 1
): Promise<UnsplashResponse> => {
  const params: Params = {
    query: userQuery,
    client_id: "l8xdQE6Jn13MnYMcD4UpAxY1HMTjQpAJUcEtBcXnH7A",
    orientation: "portrait",
    per_page: 12,
    page,
  };

  const response = await axios.get("/search/photos", { params });

  return response.data as UnsplashResponse;
};
