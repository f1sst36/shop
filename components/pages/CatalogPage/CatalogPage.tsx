import React, { useEffect } from 'react';
import { RootState } from '../../../store/store';
import { useCSTypedSelector } from '../../../hooks/redux';

export const CatalogPage: React.FC<{ serverSideRootState: RootState }> = ({
	serverSideRootState
}) => {
	const clientSideCatalogState = useCSTypedSelector(serverSideRootState).catalogState;
	useEffect(() => {
		console.log('serverSideRootState', serverSideRootState);
		console.log('clientSideCatalogState', clientSideCatalogState);
	}, []);
	return <></>;
};
