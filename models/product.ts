export interface Product {
	id: number;
	name: string;
	description: string;
	priceWithoutSale: number;
	sale: number | null;
	image: string;
	companyProducer: string;
}
