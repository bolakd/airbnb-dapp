import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';

const home = [{ place: 'Entire place' }, { place: 'Private room' }, { place: 'Shared room' }];
const people = [
	{ guest: 'for 1 guest' },
	{ guest: 'for 2 guest' },
	{ guest: 'for 3 guest' },
	{ guest: 'for 4 guest' },
	{ guest: 'for 5 guest' },
	{ guest: 'for 6 guest' },
];
const Listboxes = () => {
	const [selectedHome, setSelectedHome] = useState(home[0]);
	const [selectedPeople, setSelectedPeople] = useState(people[0]);

	return (
		<div className="flex space-x-10">
			<Listbox value={selectedHome} onChange={setSelectedHome}>
				<div className="relative mt-1">
					<Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
						<span className="block truncate">{selectedHome.place}</span>
						<span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
							<SelectorIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
						</span>
					</Listbox.Button>
					<Transition
						as={Fragment}
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto z-50 text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
							{home.map((places, placeId) => (
								<Listbox.Option
									key={placeId}
									className={({ active }) =>
										`${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'}
                          cursor-default select-none relative py-2 pl-10 pr-4`
									}
									value={places}
								>
									{({ selectedHome, active }) => (
										<>
											<span
												className={`${
													selectedHome ? 'font-medium' : 'font-normal'
												} block`}
											>
												{places.place}
											</span>
											{selectedHome ? (
												<span
													className={`${
														active ? 'text-amber-600' : 'text-amber-600'
													}
                                absolute inset-y-0 left-0 flex items-center pl-3`}
												>
													<CheckIcon
														className="w-5 h-5"
														aria-hidden="true"
													/>
												</span>
											) : null}
										</>
									)}
								</Listbox.Option>
							))}
						</Listbox.Options>
					</Transition>
				</div>
			</Listbox>
			<Listbox value={selectedPeople} onChange={setSelectedPeople}>
				<div className="relative mt-1">
					<Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
						<span className="block truncate">{selectedPeople.guest}</span>
						<span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
							<SelectorIcon className="w-5 h-5 text-gray-400" aria-hidden="true" />
						</span>
					</Listbox.Button>
					<Transition
						as={Fragment}
						leave="transition ease-in duration-100"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto z-50 text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
							{people.map((guests, guestId) => (
								<Listbox.Option
									key={guestId}
									className={({ active }) =>
										`${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'}
                          cursor-default select-none relative py-2 pl-10 pr-4`
									}
									value={guests}
								>
									{({ selectedPeople, active }) => (
										<>
											<span
												className={`${
													selectedPeople ? 'font-medium' : 'font-normal'
												} block`}
											>
												{guests.guest}
											</span>
											{selectedPeople ? (
												<span
													className={`${
														active ? 'text-amber-600' : 'text-amber-600'
													}
                                absolute inset-y-0 left-0 flex items-center pl-3`}
												>
													<CheckIcon
														className="w-5 h-5"
														aria-hidden="true"
													/>
												</span>
											) : null}
										</>
									)}
								</Listbox.Option>
							))}
						</Listbox.Options>
					</Transition>
				</div>
			</Listbox>
		</div>
	);
};

export default Listboxes;
