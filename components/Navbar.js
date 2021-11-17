import Link from 'next/link';
import { useRouter } from 'next/router';

function openMenu() {
	const btn = document.querySelector('button.mobile-menu-button');
	const menu = document.querySelector('.mobile-menu');

	btn.addEventListener('click', () => {
		menu.classList.toggle('hidden');
	});
}

const Navbar = () => {
	const router = useRouter();

	return (
		<div>
			<nav className="sticky top-0 bg-blue-100 shadow-lg px-10 py-2 z-50">
				<div className="max-w-full mx-auto px-4">
					<div className="flex justify-between">
						<div className="flex space-x-4 ">
							<div>
								<a href="/" className="flex items-center py-5 px-2">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-8 w-8 mr-1 text-blue-400"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
										/>
									</svg>
									<span
										className="font-bold text-3xl 
									tracking-widest
									text-blue-400"
									>
										Airbnb
									</span>
								</a>
							</div>
						</div>
						<div className="hidden md:flex flex-shrink-0 items-center space-x-12 px-10  ">
							<Link href="/">
								<a
									className={`block tracking-wide text-xl text-blue-400  hover:text-blue-500 transition duration-200  ${
										router.pathname == '/' ? 'text-blue-500' : 'text-blue-400'
									}`}
								>
									Home
								</a>
							</Link>
							<Link href="/host-home">
								<a
									className={`block tracking-wide text-xl text-blue-400  hover:text-blue-500 transition duration-200  ${
										router.pathname == '/host-home'
											? 'text-blue-500'
											: 'text-blue-400'
									}`}
								>
									Host home
								</a>
							</Link>
							<Link href="/my-profile">
								<a
									className={`block tracking-wide text-xl text-blue-400  hover:text-blue-500 transition duration-200  ${
										router.pathname == '/my-profile'
											? 'text-blue-500'
											: 'text-blue-400'
									}`}
								>
									My profile
								</a>
							</Link>
						</div>
						<div className="md:hidden flex items-center">
							<button onClick={() => openMenu()} className="mobile-menu-button">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-10 w-10 text-blue-400"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16m-7 6h7"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>

				<div className="mobile-menu hidden md:hidden">
					<Link href="/">
						<a
							className={`block text-center mb-2 tracking-wide text-xl text-blue-400  hover:text-blue-500 transition duration-200 ${
								router.pathname == '/' ? 'text-blue-500' : 'text-blue-400'
							}`}
						>
							Home
						</a>
					</Link>
					<Link href="/host-home">
						<a
							className={`block text-center mb-2 tracking-wide text-xl text-blue-400 hover:text-blue-500 transition duration-200 ${
								router.pathname == '/host-home' ? 'text-blue-500' : 'text-blue-400'
							}`}
						>
							Host home
						</a>
					</Link>
					<Link href="/my-profile">
						<a
							className={`block text-center mb-2 tracking-wide text-xl text-blue-400  hover:text-blue-500 transition duration-200 ${
								router.pathname == '/my-profile' ? 'text-blue-500' : 'text-blue-400'
							}`}
						>
							My profile
						</a>
					</Link>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
