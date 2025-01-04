type Address = {
	state: number;
	city: number;
	street: string;
	number: number;
};

type PropertyDetails = {
	badroom: number;
	bathroom: number;
	numberOfEnSuites: number;
	parkingSpaces: number;
};
type Imovel = {
	title: string;
	broker: string;
	value: string;
	showToClient: boolean;
	highlight: boolean;
	address: Address;
	category: string;
	description: string;
	googleMapsLink: string;
	details: PropertyDetails;
	tags: string[];
	forRent: boolean;
	forSale: boolean;
};

export type PageServerLoad = Kit.ServerLoad<Imovel>;
export type PageLoad = Kit.Load<Imovel>;
