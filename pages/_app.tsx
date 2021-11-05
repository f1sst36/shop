import React from 'react';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { PageLayout } from 'components/layout/PageLayout/PageLayout';

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<PageLayout>
			<Component {...pageProps} />
		</PageLayout>
	);
};

// export const getServerSideProps = async (appContext: AppContext) => {
// 	return {
// 		...appContext,
// 		test: {
// 			a: 1,
// 			b: 2
// 		}
// 	};
// };

export default MyApp;
