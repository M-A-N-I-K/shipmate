import React from "react";
import { Link } from "react-router-dom";
const priceCard = () => {
	return (
		<>
			<div className="flex flex-wrap justify-center content-center ">
				<div className="bg-offWhite flex flex-col justify-evenly content-center mt-10 h-[80vh] p-8 rounded-xl shadow-lg shadow-neutral-200 w-96">
					<div className="flex justify-between mb-4">
						<div>
							<p className="text-lg font-semibold text-neutral-700">
								Price Details
							</p>
						</div>
						<div className="flex bg-lightedtGray rounded-2xl shadow-2xl mt-2">
							<svg
								width="10"
								height="10"
								viewBox="0 0 10 10"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="mt-1 mr-2"
							>
								<path
									d="M5.74379 0.847789L6.60455 2.5693C6.72192 2.80894 7.03493 3.0388 7.29902 3.08282L8.85914 3.34203C9.85684 3.50831 10.0916 4.23213 9.37266 4.94616L8.15978 6.15905C7.95437 6.36445 7.84188 6.7606 7.90546 7.04426L8.2527 8.54569C8.52658 9.73412 7.89568 10.1938 6.84419 9.57273L5.38188 8.70708C5.11779 8.55058 4.68252 8.55058 4.41353 8.70708L2.95122 9.57273C1.90462 10.1938 1.26884 9.72923 1.54271 8.54569L1.88995 7.04426C1.95353 6.7606 1.84104 6.36445 1.63564 6.15905L0.422752 4.94616C-0.291284 4.23213 -0.0614229 3.50831 0.936272 3.34203L2.49639 3.08282C2.7556 3.0388 3.0686 2.80894 3.18598 2.5693L4.04673 0.847789C4.51624 -0.0863275 5.27918 -0.0863275 5.74379 0.847789Z"
									fill="black"
								/>
							</svg>
							<span className="text-semibold text-xs">
								Known Shipper
							</span>
						</div>
					</div>

					<div className="flex justify-between text-lightGray">
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
					<div className="flex justify-between border-t-2 text-lightGray border-lightGray pt-4">
						<div>
							<p className="text-sm font-medium text-neutral-700">
								Duties and taxes
							</p>
						</div>
						<div className="text-right">
							<p className="text-sm font-medium text-neutral-700">
								Not included
							</p>
						</div>
					</div>
					<div className="flex justify-between text-lightGray">
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
					<div className=" text-lightGray">
						<div className="flex text-lightGray mb-4">
							<p className="text-sm font-medium text-neutral-700">
								Based on the items cost
							</p>
						</div>
					</div>
					<div className="flex border-t-2 font-medium text-lightGray border-lightGray pt-2">
						<p className="text-sm text-neutral-700">Add a</p>
						<span className="text-blue text-sm ml-1 underline decoration-blue">
							Promo Code
						</span>
					</div>
					<div className="flex justify-between text-lightGray">
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
					<div className="flex justify-between border-t-2 font-bold border-lightGray mb-4">
						<div>
							<p className="text-lg text-neutral-700">Total:</p>
						</div>
						<div className="text-right">
							<p className="text-lg text-neutral-700">$1,848.00</p>
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
