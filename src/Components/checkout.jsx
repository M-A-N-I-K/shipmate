import React, { lazy } from "react";

const Cards = lazy(() => import("./cards"));
const PriceCard = lazy(() => import("./priceCard"));
const Progressbar = lazy(() => import("./ProgressBar/progressBar"));

const checkout = () => {
	return (
		<div className="flex flex-col md:grid md:grid-cols-3 gap-4 bg-offWhite">
			<div className="col-span-3 place-items-center p-10 ">
				<div className="flex w-[80vw] md:w-[95vw] justify-center">
					<Progressbar />
				</div>
			</div>
			<Cards />
			<div className="col-span-1 bg-gray-100 ">
				<PriceCard />
			</div>
		</div>
	);
};

export default checkout;
