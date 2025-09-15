import { useQuery } from "@tanstack/react-query";

export function useProduct({ limit, page_no, id }) {
  return useQuery({
    queryKey: ["product", limit, page_no, id],
    queryFn: async () => {
      let url = `https://dummyjson.com/products`;
      if (id) {
        const res = await fetch(`${url}/${id}`);
        return res.json();
      }
      const res = await fetch(
        `${url}?limit=${limit}&skip=${(page_no - 1) * limit}`
      );
      return res.json();
    },
    keepPreviousData: true,
    staleTime:1000*60*5,
    cacheTime:1000*60*10
  });
}
