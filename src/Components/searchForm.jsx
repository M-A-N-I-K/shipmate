import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLocationDot,
	faCalendarDays,
	faBug,
	faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
const searchForm = () => {
	return (
		<div className="flex flex-col justify-center h-[230vh] md:h-[90vh]">
			<div>
				<h1 className="mb-4 text-4xl text-center font-bold leading-none tracking-tight text-black md:text-5xl lg:text-4xl  hover:underline hover:decoration-blue">
					Hassle-Free Shipping Solutions
				</h1>
				<p className="mb-6 text-lg text-center font-normal text-gray hover:decoration-2lg:text-lg sm:px-16  hover:underline hover:decoration-blue hover:decoration-2 xl:px-22">
					Compare, book, and manage your freight across the world’s top
					logistics providers, all on one platform.
				</p>
			</div>
			<div className="w-[90vw]  h-[40vh] md:h-[8vh] p-2 flex flex-col md:flex-row justify-between content-center self-center shadow-xl rounded bg-white">
				<div className="flex justify-between items-center border-b-[1px] md:border-b-0">
					<span className="p-4 md:p-0 md:pl-4">
						<FontAwesomeIcon icon={faLocationDot} className="mr-3" />
					</span>
					<span className="text-lightGray">Origin , Port ,City</span>
				</div>
				<div className="flex justify-between items-center border-b-[1px] md:border-b-0">
					<span className="p-4 md:p-0">
						<FontAwesomeIcon icon={faLocationDot} className="mr-3" />
					</span>
					<span className="text-lightGray">Destination , Port ,City</span>
				</div>
				<div className="flex justify-between items-center border-b-[1px] md:border-l-[1px] md:border-b-0 border-lightGray hover:border-blue ">
					<span className="p-4 md:p-0 md:pl-4">
						<FontAwesomeIcon icon={faCalendarDays} />
					</span>
					<span className="text-lightGray pl-4">24 April 2023</span>
				</div>
				<div className="flex justify-between items-center border-b-[1px] md:border-l-[1px] md:border-b-0 border-lightGray hover:border-blue">
					<span className="p-4 md:p-0 md:pl-4">
						<FontAwesomeIcon icon={faBug} />
					</span>
					<span className="text-lightGray pl-4">Load</span>
				</div>
				<div className="flex justify-between md:border-l-[1px] border-lightGray hover:border-blue self-end md:self-auto items-center">
					<span className="p-4">
						<button
							type="button"
							className="text-white bg-blue focus:ring-4 focus:outline-none font-medium rounded-xl shadow-2xl  text-sm px-40 md:px-2 py-2 gap-x-2 text-center mr-5 mb-2 md:mr-0"
						>
							<FontAwesomeIcon icon={faArrowRight} />
						</button>
					</span>
				</div>
			</div>
			<h1 className="pt-10 mb-4 text-4xl text-center font-bold leading-none tracking-tight text-black md:text-5xl lg:text-4xl  hover:underline hover:decoration-blue">
				Services
			</h1>
			<div className="flex flex-col md:flex-row justify-between px-[32px]">
				<div className="w-[331px] mb-10 md:mb-0  max-w-md p-4 bg-white rounded-xl shadow-2xl  sm:p-8">
					<div className="flex items-center justify-center mb-4">
						<a
							href="#"
							className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
						></a>
						<h5 className="text-xl font-bold hover:decoration-2 leading-none  hover:underline hover:decoration-blue text-black ">
							Freight Services
						</h5>
					</div>
					<div className="border border-solid hover:cursor-pointer hover:border-blue border-slate-200"></div>
					<br />
					<div className="flow-root">
						<p className="mb-3 text-gray hover:decoration-2 hover:underline hover:decoration-blue">
							Open new Opportunites to grow your busniess. Enter new
							markets and discover new contitnents, We are with you,
							door-to-door.
						</p>
					</div>
				</div>
				<div className="w-[331px] mb-10 md:mb-0  max-w-md p-4 bg-white rounded-xl shadow-2xl  sm:p-8">
					<div className="flex items-center justify-center mb-4">
						<a
							href="#"
							className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
						></a>
						<h5 className="text-xl font-bold hover:decoration-2 leading-none text-black  hover:underline hover:decoration-blue">
							Business Services
						</h5>
					</div>
					<div className="border border-solid hover:cursor-pointer hover:border-blue border-slate-200"></div>
					<br />
					<div className="flow-root">
						<p className="mb-3 text-gray hover:decoration-2 hover:underline hover:decoration-blue">
							We support your goals for growth with cargo insurance,
							online payments and paperless workflow. Take your business
							to the next level.
						</p>
					</div>
				</div>
				<div className="w-[331px] mb-10 md:mb-0  max-w-md p-4 bg-white rounded-xl shadow-2xl sm:p-8">
					<div className="flex items-center justify-center mb-4">
						<a
							href="#"
							className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
						></a>
						<h5 className="text-xl font-bold hover:decoration-2 leading-none text-black  hover:underline hover:decoration-blue">
							Shipping & Logistics
						</h5>
					</div>
					<div className="border border-solid hover:cursor-pointer hover:border-blue border-slate-200"></div>
					<br />
					<div className="flow-root">
						<p className="mb-3 text-gray hover:decoration-2 hover:underline hover:decoration-blue">
							Find powerful solutions to meet your diverse transportation
							needs. Agile solutions to handle all your supply chain
							needs.
						</p>
					</div>
				</div>
				<div className="w-[331px] mb-10 md:mb-0  max-w-md p-4 bg-white rounded-xl shadow-2xl  sm:p-8">
					<div className="flex items-center justify-center mb-4">
						<a
							href="#"
							className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
						></a>
						<h5 className="text-xl font-bold hover:decoration-2 leading-none text-black hover:underline hover:decoration-blue">
							24/7 Support
						</h5>
					</div>
					<div className="border border-solid hover:cursor-pointer hover:border-blue border-slate-200"></div>
					<br />
					<div className="flow-root">
						<p className="mb-3 text-gray hover:decoration-2 hover:underline hover:decoration-blue">
							Receive support from our experts all over the world at
							every stage of the process, 24/7.
						</p>
					</div>
				</div>
			</div>
			<div className="w-[100vw]">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="absolute bg-offWhite"
					viewBox="0 0 1440 320"
				>
					<path
						fill="#6F57E9"
						fillOpacity="1"
						d="M0,160L40,160C80,160,160,160,240,165.3C320,171,400,181,480,165.3C560,149,640,107,720,122.7C800,139,880,213,960,213.3C1040,213,1120,139,1200,122.7C1280,107,1360,149,1400,170.7L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
					></path>
				</svg>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="absolute z-10"
					viewBox="0 0 1440 320"
				>
					<path
						fill="#7357FF"
						fillOpacity="1"
						d="M0,256L40,218.7C80,181,160,107,240,101.3C320,96,400,160,480,197.3C560,235,640,245,720,213.3C800,181,880,107,960,112C1040,117,1120,203,1200,240C1280,277,1360,267,1400,261.3L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
					></path>
				</svg>
			</div>
		</div>
	);
};

export default searchForm;
