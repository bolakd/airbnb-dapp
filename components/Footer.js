const Footer = () => {
	return (
		<footer className="text-center p-3">
			<p className="text-blue-400 text-lg ">
				{'Copyright © '}Airbnb {new Date().getFullYear()}
				{'.'}
			</p>
		</footer>
	);
};

export default Footer;
