import useSWR from "swr";

const API_KEY = process.env.NEXT_PUBLIC_GNEWS_KEY;
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function useGNews(
  endpoint = "top-headlines",
  parameters = { category: "general", lang: "en", country: "us", max: 10 }
  //refreshInterval = 60000
) {
  const queryString = new URLSearchParams({
    ...parameters,
    apikey: API_KEY,
  }).toString();

  const url = `https://gnews.io/api/v4/${endpoint}?${queryString}`;

  const { data, error, isLoading, mutate } = useSWR(url, fetcher);

  //console.log(url, API_KEY);

  return { data, error, isLoading, mutate, url };
}
