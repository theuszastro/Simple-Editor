import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyle from '../styles/GlobalStyle';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />

				<link
					href="https://fonts.googleapis.com/css2?family=Josefin+Sans&family=Lexend+Deca&family=Montserrat&family=Poppins&family=Work+Sans&display=swap"
					rel="stylesheet"
				/>

				<title>Simple Editor</title>
			</Head>

			<Component {...pageProps} />

			<GlobalStyle />
		</>
	);
};

export default MyApp;
