import React from "react";
import { Link } from "react-router-dom";
const priceCard = () => {
	return (
		<>
			<div className="flex flex-wrap justify-center content-center ">
				<div className="bg-offWhite p-8 rounded-xl shadow-lg shadow-neutral-200 w-96">
					<div className="flex justify-between mb-4">
						<div>
							<p className="text-lg font-semibold text-neutral-700">
								Price Details
							</p>
						</div>
						<div className="text-right">
							<p className="text-lg font-semibold text-neutral-700">
								$1,848.00
							</p>
						</div>
					</div>

					<div className="flex justify-between text-lightGray mb-4">
						<div>
							<p className="text-sm font-medium text-neutral-700">
								Seller’s Quote
							</p>
						</div>
						<div className="text-right">
							<p className="text-md font-medium text-neutral-700">
								$ 3,659.25
							</p>
						</div>
					</div>
					<div className="flex justify-between border-t-2 text-lightGray border-lightGray mb-4">
						<div>
							<p className="text-sm font-medium text-neutral-700">
								Duties and taxes
							</p>
						</div>
						<div className="text-right">
							<p className="text-md font-medium text-neutral-700">
								Not included
							</p>
						</div>
					</div>
					<div className="flex justify-between text-lightGray mb-1">
						<div>
							<p className="text-sm font-medium text-neutral-700">
								Insurance
							</p>
						</div>
						<div className="text-right">
							<p className="text-md font-medium text-neutral-700">
								$323.40
							</p>
						</div>
					</div>
					<div className="flex justify-between text-lightGray mb-4">
						<div className="flex text-lightGra mb-4">
							<p className="text-sm font-medium text-neutral-700">
								Based on the items cost
							</p>
						</div>
					</div>
					<div className="flex border-t-2 font-medium text-lightGray border-lightGray mb-4">
						<p className="text-sm text-neutral-700">Add a</p>
						<span className="text-blue text-sm ml-1 underline decoration-blue">
							Promo Code
						</span>
					</div>
					<div className="flex justify-between text-lightGray mb-4">
						<div>
							<p className="text-sm font-medium text-neutral-700">
								Platform Fee
							</p>
						</div>
						<div className="text-right">
							<p className="text-md font-medium text-neutral-700">
								$48.00
							</p>
						</div>
					</div>
					<div className="flex justify-between border-t-2 border-lightGray mb-4">
						<div>
							<p className="text-lg font-semibold text-neutral-700">
								Total:
							</p>
						</div>
						<div className="text-right">
							<p className="text-lg font-semibold text-neutral-700">
								$1,848.00
							</p>
						</div>
					</div>
					<div className="text-center cursor-pointer duration-150 hover:bg-neutral-200 py-0.5 bg-neutral-100 text-neutral-400 font-semibold rounded-lg mt-3">
						<Link to="booking-summary">
							<button
								type="button"
								className="text-white bg-darkPurple focus:ring-4 focus:outline-none font-semibold rounded-lg text-md px-[86.5px] py-[10px] gap-x-2 text-center mr-5 mb-2 md:mr-0"
							>
								Checkout
							</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default priceCard;
