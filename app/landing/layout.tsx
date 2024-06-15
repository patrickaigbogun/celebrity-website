import type { Metadata } from "next";
import Script from "next/script";

import Header from "./components/templates/header";
import Footer from "./components/templates/footer";

export const metadata: Metadata = {
	title: "Celebrity Website",
	description: "A celebrity website template built by Patrick Aigbogun",
	robots: "index, follow",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<meta charSet="UTF-8"></meta>
				<meta httpEquiv="X-UA-Compatible" content="IE=edge"></meta>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"></meta>
				<link rel="stylesheet" href="/boxicons/css/boxicons.min.css" />
				<link
					rel="stylesheet"
					href="bootstrap5/dist/css/bootstrap.min.css"></link>
				<link rel="stylesheet" href="/style.css" />
				<Script src="bootstrap5/dist/js/bootstrap.min.js"></Script>
			</head>
			<body className="body">
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
