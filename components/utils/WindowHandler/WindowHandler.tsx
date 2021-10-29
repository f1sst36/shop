import React, { useEffect } from 'react';
import { EWindowEvent } from '../../../enum/EWindowEvent';

interface WindowHandlerProps {
	event: EWindowEvent;
	callback: (e: any) => any;
}

export const WindowHandler: React.FC<WindowHandlerProps> = ({ event, callback }) => {
	useEffect(() => {
		window.addEventListener(event, callback);

		return () => {
			window.removeEventListener(event, callback);
		};
	}, []);

	return null;
};
