import React from "react";

const navbar = () => {
	return (
		<div className="h-[10vh]">
			<nav className="bg-offWhite fixed h-[10vh] w-full z-20 top-0 left-0 border-b border-gray-200 ">
				<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
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
					<div className="flex justify-between w-3/12">
						<button
							type="button"
							className="text-white bg-blue focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-12 py-2 gap-x-2 text-center mr-5 mb-2 md:mr-0"
						>
							Login
						</button>
						<button
							type="button"
							className="text-black  hover:text-white border border-blue-700 hover:bg-blue 
                                font-medium rounded-lg text-sm px-12 py-2 text-center mr-2 mb-2"
						>
							Learn More
						</button>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default navbar;
