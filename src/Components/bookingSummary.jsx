import React from "react";
import Progressbar from "./ProgressBar/progressBar";
import Locationbar from "./locationbar";
import SideFilterBar from "./sidefilterbar";
import DetailsCard from "./detailsCard";

const bookingSummary = () => {
	return (
		<div className="flex flex-col justify-between w-[100vw] h-[230vh] md:h-[90vh] bg-offWhite">
			<div className="flex flex-col md:grid md:grid-cols-3 gap-4 bg-offWhite">
				<div className="col-span-3 p-10 ">
					{/* <div className="h-[8vh] w-[20vw] bg-white rounded-2xl shadow-2xl p-4">
						<svg
							width="24"
							height="24"
							className="mr-3"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M12 22V10M20.42 12.37C21.29 12.72 21.83 13.75 21.63 14.66L21.22 16.52C20.51 19.72 18 22 14.38 22H9.61998C5.99998 22 3.48998 19.72 2.77998 16.52L2.36998 14.66C2.16998 13.75 2.70998 12.72 3.57998 12.37L4.99998 11.8L10.51 9.59C11.47 9.21 12.53 9.21 13.49 9.59L19 11.8L20.42 12.37Z"
								stroke="#868686"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M19 8V11.8L13.49 9.59C12.53 9.21 11.47 9.21 10.51 9.59L5 11.8V8C5 6.35 6.35 5 8 5H16C17.65 5 19 6.35 19 8ZM14.5 5H9.5V3C9.5 2.45 9.95 2 10.5 2H13.5C14.05 2 14.5 2.45 14.5 3V5Z"
								stroke="#868686"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
						<h5 className="text-sm text-center font-bold hover:decoration-2 leading-none  text-purple ">
							Load
						</h5>
					</div> */}
					<div className="flex w-[80vw] md:w-[95vw] justify-center">
						<Progressbar />
					</div>
				</div>
				<div className="w-[100vw] flex justify-center pb-2 border-b-2 border-opacity-60 border-lightGray">
					<Locationbar />
				</div>
			</div>
			<div className="h-[200vh] md:h-[100vh] bg-offWhite pt-10 flex flex-row md:flex-col justify-between  mr-10">
				<div className="self-start">
					<SideFilterBar />
				</div>
				<div className="flex flex-col justify-between mt-10 md:mt-0 self-end w-[90vw] md:w-[75vw]">
					<div className="flex mb-10 w-[80vw] md:w-[60vw] bg-offset rounded-xl shadow-2xl">
						<div className="h-[8vh] w-[30vw] md:w-[20vw] bg-white rounded-2xl shadow-2xl p-6">
							<h5 className="text-xs md:text-sm text-center font-bold hover:decoration-2 leading-none  text-purple ">
								Best Value 5-5 days. $3,121
							</h5>
						</div>
						<div className="h-[5vh] w-[30vw] md:w-[20vw] p-6">
							<h5 className="text-xs md:text-sm text-center font-bold hover:decoration-2 leading-none  text-lightGray ">
								Quickest 5-5 days. $3,121
							</h5>
						</div>
						<div className="h-[5vh] w-[30vw] md:w-[20vw] p-6">
							<h5 className="text-xs md:text-sm text-center font-bold hover:decoration-2 leading-none  text-lightGray ">
								Cheapest 5-5 days. $3,121
							</h5>
						</div>
					</div>
					<div className="w-[80vw] h-[25vh] md:w-[60vw] md:h-[18vh] mb-10 bg-white rounded-xl shadow-2xl">
						<DetailsCard />
					</div>
					<div className="w-[80vw] h-[25vh]  md:w-[60vw] md:h-[18vh] mb-10 bg-white rounded-xl shadow-2xl">
						<DetailsCard />
					</div>
					<div className="w-[80vw] h-[25vh] md:w-[60vw] md:h-[18vh] mb-10 bg-white rounded-xl shadow-2xl">
						<DetailsCard />
					</div>
					<div className="w-[80vw] h-[25vh] md:w-[60vw] md:h-[18vh] mb-10 bg-white rounded-xl shadow-2xl">
						<DetailsCard />
					</div>
				</div>
			</div>
		</div>
	);
};

export default bookingSummary;
