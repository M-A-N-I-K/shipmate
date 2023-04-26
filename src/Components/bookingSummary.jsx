import React from "react";
import Progressbar from "./ProgressBar/progressBar";
import Locationbar from "./locationbar";
const bookingSummary = () => {
	return (
		<div className="flex flex-col justify-center h-[230vh] md:h-[90vh]">
			<div className="flex flex-col md:grid md:grid-cols-3 gap-4 bg-offWhite">
				<div className="col-span-3 place-items-center p-10 ">
					<div className="flex w-[80vw] md:w-[95vw] justify-center">
						<Progressbar />
					</div>
				</div>
			</div>
			<Locationbar />
		</div>
	);
};

export default bookingSummary;
