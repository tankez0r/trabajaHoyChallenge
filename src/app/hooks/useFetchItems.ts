'use client';
import useSWR from "swr";
export function useFetchItems() {
    const { data, error, isLoading, mutate } = useSWR("/api/items", {
        fetcher: async (url: string) => {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        },
    });
    return {
        items: data,
        isLoading,
        isError: error,
        mutate,
    };
}