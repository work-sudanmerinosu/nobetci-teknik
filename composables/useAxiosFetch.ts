import axios from 'axios';
import { Features, Hero, Works } from '~~/types';

export const useAxiosFetch = () => {
	const runtimeConfig = useRuntimeConfig();

	const api = axios.create({
		baseURL: runtimeConfig.public.baseUrl,
	});

	return {
		getHero: async (): Promise<Hero> =>
			await api.get('/contents/getHero').then((r) => r.data),
		getFeatures: async (): Promise<Features> =>
			await api.get('/contents/getFeatures').then((r) => r.data),
		getWorks: async (): Promise<Works> =>
			await api.get('/contents/getWorks').then((r) => r.data),
	};
};
