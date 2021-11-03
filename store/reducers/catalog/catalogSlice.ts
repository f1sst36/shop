import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../../../models/product';

interface CatalogState {
	currentPage: number;
	pageSize: number;
	products: Product[];
	filters: {
		price: {
			min: number;
			max: number;
		} | null;
		sort: string | null;
		companyProducers: string[] | null;
	};
}

const initialState: CatalogState = {
	currentPage: 1,
	pageSize: 10,
	products: [],
	filters: {
		price: null,
		sort: null,
		companyProducers: null
	}
};

export const catalogSlice = createSlice({
	name: 'catalog',
	initialState,
	reducers: {
		//
	}
});
