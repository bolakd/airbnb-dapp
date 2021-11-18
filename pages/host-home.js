import Head from 'next/head';
import Listboxes from '../components/Listboxes';

export default function HostHome() {
	return (
		<>
			<Head>
				<title>Airbnb | Host home</title>
				<meta name="keywords" content="host-home" />
			</Head>
			<h1>Host Home</h1>
			<div className="flex justify-center">
				<Listboxes />
			</div>
		</>
	);
}
