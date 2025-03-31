import {Data} from "../types/data.ts";
import {useQuery, UseQueryResult} from "@tanstack/react-query";

const API_URL = '/api';
export const fetchData = async (search: string): Promise<Data[]> => {
	const fetchInput = search === '' ? `${API_URL}/data` : `${API_URL}/data?search=${search}`
	const response = await fetch(fetchInput);
	if (!response.ok) {
		throw new Error('Failed to fetch posts');
	}
	return response.json();
};
export const useDataQuery = (search: string): UseQueryResult<Data[], Error> => {
	return useQuery(
		{
			queryKey: ['posts', search],
			queryFn: () => fetchData(search),
			enabled: true,
		});
}

export const addData = async (newData: {
	category: string
	example: string
	translate: string
	comment?: string
}) => {
	const response = await fetch(`${API_URL}/data`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(newData),
	});

	if (!response.ok) {
		throw new Error('Failed to add post');
	}

	return response.json();
};

