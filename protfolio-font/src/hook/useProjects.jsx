import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useProjects = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/projects");
      return res.data;
    }
  });
};
