import { useEffect, useState } from "react";

interface UseFetchState<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
}

export function useFetch<T>(url: string) {
  const [state, setState] = useState<UseFetchState<T>>({
    data: null,
    error: null,
    loading: true,
  });

  useEffect(() => {
    let isActive = true;

    async function load() {
      setState({
        data: null,
        error: null,
        loading: true,
      });

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`);
        }

        const result = (await response.json()) as T;

        if (!isActive) {
          return;
        }

        setState({
          data: result,
          error: null,
          loading: false,
        });
      } catch (error) {
        if (!isActive) {
          return;
        }

        setState({
          data: null,
          error: error instanceof Error ? error.message : "Something went wrong",
          loading: false,
        });
      }
    }

    void load();

    return () => {
      isActive = false;
    };
  }, [url]);

  return state;
}
