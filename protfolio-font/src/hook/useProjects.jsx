import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useProjects = () => {
const apiKey = import.meta.env.VITE_PROJECT_API_KEY
  return useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await axios.get("https://protfolio-server-amber.vercel.app/projects", {
        headers: {
          authorization : apiKey 
        }
      });
      return res.data;
    }
  });
};
