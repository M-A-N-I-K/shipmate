import React from "react";
import Progressbar from "./ProgressBar/progressBar";
import Locationbar from "./locationbar";
import SideFilterBar from "./sidefilterbar";
import DetailsCard from "./detailsCard";

const bookingSummary = () => {
	return (
		<div className="flex flex-col justify-between h-[230vh] md:h-[90vh] bg-offWhite">
			<div className="flex flex-col md:grid md:grid-cols-3 gap-4 bg-offWhite">
				<div className="col-span-3 place-items-center p-10 ">
					<div className="flex w-[80vw] md:w-[95vw] justify-center">
						<Progressbar />
					</div>
				</div>
				<div className="w-[100vw] flex justify-center pb-2 border-b-2 border-opacity-60 border-lightGray">
					<Locationbar />
				</div>
			</div>
			<div className="h-[100vh] bg-offWhite pt-10 flex justify-between mr-10">
				<div>
					<SideFilterBar />
				</div>
				<div className="flex flex-col justify-between w-[75vw]">
					<div className="flex mb-10 w-[60vw] bg-offset rounded-xl shadow-2xl">
						<div className="h-[8vh] w-[20vw] bg-white rounded-2xl shadow-2xl p-6">
							<h5 className="text-sm text-center font-bold hover:decoration-2 leading-none  text-purple ">
								Best Value 5-5 days. $3,121
							</h5>
						</div>
						<div className="h-[5vh] w-[20vw] p-6">
							<h5 className="text-sm text-center font-bold hover:decoration-2 leading-none  text-lightGray ">
								Quickest 5-5 days. $3,121
							</h5>
						</div>
						<div className="h-[5vh] w-[20vw] p-6">
							<h5 className="text-sm text-center font-bold hover:decoration-2 leading-none  text-lightGray ">
								Cheapest 5-5 days. $3,121
							</h5>
						</div>
					</div>
					<div className="w-[60vw] h-[18vh] mb-10 bg-white rounded-xl shadow-2xl">
						<DetailsCard />
					</div>
					<div className="w-[60vw] h-[18vh] mb-10 bg-white rounded-xl shadow-2xl">
						<DetailsCard />
					</div>
					<div className="w-[60vw] h-[18vh] mb-10 bg-white rounded-xl shadow-2xl">
						<DetailsCard />
					</div>
					<div className="w-[60vw] h-[18vh] mb-10 bg-white rounded-xl shadow-2xl">
						<DetailsCard />
					</div>
				</div>
			</div>
		</div>
	);
};

export default bookingSummary;
