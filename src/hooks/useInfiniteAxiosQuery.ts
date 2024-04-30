import { useEffect, useRef, useState } from "react";
import axios from "../lib/axios";
import { AxiosRequestConfig } from "axios";

type UseInfiniteItems = Omit<AxiosRequestConfig, "signal"> & {
  initialPage?: number;
  fetchOnMount?: boolean;
  limit?: number;
};

export default function useInfiniteAxiosQuery<Ttem>(options: UseInfiniteItems) {
  const [items, setItems] = useState<Ttem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const {
    fetchOnMount = false,
    initialPage = 1,
    limit = 10,
    ...axiosOptions
  } = options;

  const currentPageRef = useRef(initialPage);
  const abortControllerRef = useRef(new AbortController());

  function fetchPage(page: number) {
    const controller = new AbortController();
    abortControllerRef.current = controller;

    setError(null);
    setIsLoading(true);

    axios({
      signal: controller.signal,
      params: { page, limit, ...options.params },
      ...axiosOptions,
    })
      .then((response) => setItems((prev) => [...prev, ...response.data]))
      .catch((error) => {
        if (error.name === "AbortError") {
          return;
        }

        setError(error);
      })
      .finally(() => setIsLoading(false));
  }

  function fetchNextPage() {
    currentPageRef.current++;
    fetchPage(currentPageRef.current);
  }

  useEffect(() => {
    if (fetchOnMount) {
      fetchPage(currentPageRef.current);
    }

    return () => abortControllerRef.current.abort();
  }, []);

  return {
    items,
    isLoading,
    error,
    fetchNextPage,
  };
}
