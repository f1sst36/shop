import React from 'react';
import { MainScreen } from './MainScreen/MainScreen';
import { Carousel } from './Carousel/Carousel';
import { AboutProduct } from './AboutProduct/AboutProduct';
import { Categories } from './Categories/Categories';

export const MainPage: React.FC = () => {
	return (
		<>
			<MainScreen />
			<AboutProduct />
			<Categories />
			<Carousel />
		</>
	);
};
