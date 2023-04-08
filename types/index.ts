export interface Hero {
	title: string;
	description: string;
	image: string;
}

export interface Features {
	title: string;
	description: string;
	jobs: Job[];
}

export interface Works {
	images: string[];
}

interface Job {
	title: string;
	description: string;
	image: string;
}
