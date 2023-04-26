import React, { lazy } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { faPlaneDeparture } from "@fortawesome/free-solid-svg-icons";
import { faWeightScale } from "@fortawesome/free-solid-svg-icons";
import Img from "../assets/img.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const cards = () => {
	return (
		<>
			<div className="grid col-span-1 md:col-span-2 mb-10">
				<div className="col-span-2 h-[35vh] mb-5 md:mb-0 m-[35px] bg-white rounded-xl shadow-2xl sm:p-8">
					<h5 className="text-xl  pb-[30px] font-bold hover:decoration-2 leading-none  text-black ">
						Booking Summary
					</h5>
					<div className="flex justify-between h-[10vh] font-semibold">
						<div className="flex flex-col pt-10 ">
							<FontAwesomeIcon icon={faBuilding} size="2x" />
							<p className="text-center text-black hover:decoration-2">
								Delhi,
							</p>
							<p className="mb-3 text-center text-black hover:decoration-2">
								110003 India
							</p>
						</div>
						<div className="flex flex-col w-[50vw]">
							<p className="text-center text-black text-sm  hover:decoration-2">
								Express
							</p>
							<FontAwesomeIcon
								icon={faPlaneDeparture}
								size="2x"
								className="border-b-2  pb-1"
							/>
						</div>
						<div className="flex flex-col pt-10">
							<FontAwesomeIcon icon={faBuilding} size="2x" />
							<p className="text-center text-black hover:decoration-2">
								Shanghai,
							</p>
							<p className="text-center mb-3 text-black hover:decoration-2">
								200080 China
							</p>
						</div>
					</div>
				</div>
				<div className="flex col-span-3 md:col-span-2  text-md font-semibold">
					<div className="h-[22vh] w-[15vw] mb-10 md:mb-0 ml-[35px] mt-[35px] p-2 bg-white rounded-xl shadow-2xl sm:p-4">
						<div className="flex flex-col items-center justify-center">
							<h5 className="mb-2 pb-2 hover:decoration-2 leading-none  text-lightGray ">
								Total Weight/Volume
							</h5>
							<FontAwesomeIcon
								className="mb-2"
								icon={faWeightScale}
								size="3x"
							/>
							<p className="text-black hover:decoration-2">114.21kg</p>
						</div>
					</div>
					<div className="h-[22vh] w-[45vw] mb-10 md:mb-0 ml-[20px] mt-[35px] p-2 bg-white rounded-xl shadow-2xl sm:pt-4 sm:pl-6">
						<h5 className="hover:decoration-2 leading-none  text-lightGray place-item-start">
							Load
						</h5>
						<div className="flex flex-col items-center">
							<p className="hover:decoration-2">
								<img src="https://img.icons8.com/ios/50/null/pallet.png" />
							</p>
							<p className="text-black font-semibold hover:decoration-2 mb-3">
								Pallets
							</p>
							<p className="mb-3 text-black hover:decoration-2">
								230 X 140 X 120 CM
							</p>
						</div>
					</div>
				</div>
				<div className="col-span-2 md:col-span-1 h-[20vh] w-[40vw] md:h-[22vh] md:w-[28vw] text-md font-semibold mb-10 md:mb-0 ml-[35px] mt-[35px] p-2 bg-white rounded-xl shadow-2xl sm:p-4">
					<h5 className="mb-2 pb-2 hover:decoration-2 leading-none  text-lightGray ">
						Seller Primetime Worldwide
					</h5>
					<div className="flex justify-center">
						<p className="mt-6 justify-self-center text-xl font-bold">
							<LazyLoadImage
								src={<Img />}
								width={100}
								height={40}
								alt="Image Alt"
								className=""
							/>
						</p>
					</div>
				</div>
				<div className="col-span-2 md:col-span-1 h-[22vh] w-[30vw] mb-10 md:mb-0 ml[20px] mt-[35px] p-2 bg-white rounded-xl shadow-2xl sm:pt-4 sm:pl-6">
					<h5 className="hover:decoration-2 leading-none text-lightGray place-item-start">
						Insurance:
						<span className="font-semibold">Xcover.com</span>
					</h5>
					<div className="flex justify-center">
						<p className="mt-10 text-center text-xl font-bold hover:decoration-2">
							XCOVER.COM
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default cards;
