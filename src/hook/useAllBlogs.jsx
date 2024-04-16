import { useQuery } from "@tanstack/react-query";

const useAllBlogs = () => {
  const {
    isLoading,
    data: blogs = [],
    refetch,
  } = useQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const response = await fetch("https://server-server.vercel.app/blogs");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });
  return { blogs, isLoading, refetch };
};

export default useAllBlogs;
