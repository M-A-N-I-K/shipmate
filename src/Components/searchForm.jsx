import React from "react";
import InfoCards from "./infoCards";
import Locationbar from "./locationbar";
const searchForm = () => {
	return (
		<div className="flex flex-col justify-center h-[230vh] md:h-[90vh]">
			<div>
				<h1 className="mb-4 text-3xl text-center font-bold leading-none tracking-tight text-black md:text-5xl lg:text-4xl  hover:underline hover:decoration-blue">
					Hassle-Free Shipping Solutions
				</h1>
				<p className="mb-6 text-md md:text-lg text-center font-normal text-gray lg:text-lg sm:px-16  hover:underline hover:decoration-blue hover:decoration-2 xl:px-22">
					Compare, book, and manage your freight across the world’s top
					logistics providers, all on one platform.
				</p>
			</div>
			<Locationbar />
			<h1 className="pt-10 mb-4 text-4xl text-center font-bold leading-none tracking-tight text-black md:text-5xl lg:text-4xl  hover:underline hover:decoration-blue">
				Services
			</h1>
			<div className="flex flex-col md:flex-row justify-between px-[32px]">
				<InfoCards />
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
