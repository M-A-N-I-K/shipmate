import React, { useState } from "react";

const navbar = () => {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [toggle, setToggle] = useState(false);
	const handleClick = () => {
		setIsLoggedIn(!isLoggedIn);
	};
	return (
		<div className="h-[10vh]">
			<nav className="bg-offWhite fixed h-[12vh] md:h-[10vh] w-full z-20 top-0 left-0">
				<div className="max-w-screen-xl flex flex-row flex-wrap items-center justify-between mx-auto p-4">
					<a
						href="https://flowbite.com/"
						className="flex items-center hover:decoration-2 hover:underline hover:decoration-blue"
					>
						<span className="self-center text-2xl font-semibold whitespace-nowrap">
							Ship
						</span>
						<span className="self-center text-blue text-2xl font-semibold whitespace-nowrap">
							mate.
						</span>
					</a>
					{!isLoggedIn ? (
						<div className="flex flex-col  md:flex-row md:justify-evenly justify-start w-4/12">
							<button
								type="button"
								className="text-white bg-blue focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-13 md:px-12 py-2 gap-x-2 text-center mr-5 mb-2 md:mr-0"
								onClick={handleClick}
							>
								Login
							</button>
							<button
								type="button"
								className="text-black hover:text-white border border-blue-700 hover:bg-blue 
						font-medium rounded-lg text-xs px-8 md:px-12 sm:py-1 md:py-2 text-center mr-2 mb-2"
							>
								Learn More
							</button>
						</div>
					) : (
						<div className="flex flex-row justify-center w-3/12">
							<svg
								width="42"
								height="42"
								viewBox="0 0 48 48"
								fill="none"
								className="mb-2 mr-6"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M17.3442 28.66C17.3442 31.24 19.3242 33.32 21.7842 33.32H26.8042C28.9442 33.32 30.6842 31.5 30.6842 29.26C30.6842 26.82 29.6242 25.96 28.0442 25.4L19.9842 22.6C18.4042 22.04 17.3442 21.18 17.3442 18.74C17.3442 16.5 19.0842 14.68 21.2242 14.68H26.2442C28.7042 14.68 30.6842 16.76 30.6842 19.34M24.0002 12V36"
									stroke="#6F57E9"
									stroke-width="3"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M30 44H18C8 44 4 40 4 30V18C4 8 8 4 18 4H30C40 4 44 8 44 18V30C44 40 40 44 30 44Z"
									stroke="#6F57E9"
									stroke-width="3"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
							<button
								type="button"
								className="text-white px-4 md:px-12 bg-blue focus:ring-4 focus:outline-none font-medium rounded-lg text-xs py-1 md:py-2 gap-x-2 text-center mr-5 mb-2 md:mr-0"
							>
								Track Shipment
							</button>
						</div>
					)}
				</div>
			</nav>
		</div>
	);
};

export default navbar;
