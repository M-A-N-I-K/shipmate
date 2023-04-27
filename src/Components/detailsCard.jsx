import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPlaneUp } from "@fortawesome/free-solid-svg-icons";
import Img from "../assets/frame.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
const detailsCard = () => {
	return (
		<div className="flex md:flex-row flex-col justify-between p-6">
			<div>
				<div className="flex justify-between">
					<button
						type="button"
						className="text-black bg-lightGreen focus:ring-4 focus:outline-none font-medium rounded-xl text-xs md:text-sm px-2 md:px-4 pb-2 py-1 gap-x-2 text-center mr-5 mb-2 md:mr-0"
					>
						<span className="text-green text-xl pr-2">●</span>
						Best Value
					</button>
					<p className="text-center text-sm md:text-lg pl-1 pt-1 text-red hover:decoration-2">
						Express
					</p>
					<div className="h-[4vh] pt-2">
						<p className="text-center border-l-2 border-opacity-40 border-lightGray pl-5 text-xs md:text-sm text-lightGray hover:decoration-2">
							Est. 5 days
						</p>
					</div>
				</div>
				<div className="flex text-[10px] md:text-xs font-semibold">
					<div className="flex pt-1">
						<FontAwesomeIcon
							className="pt-1 "
							icon={faLocationDot}
							size="sm"
						/>
						<p className="text-center pl-1 text-lightGray hover:decoration-2">
							110003 ,
						</p>
						<p className="text-center text-lightGray hover:decoration-2">
							Delhi
						</p>
					</div>
					<span className="border-b-2 w-[30px] border-opacity-90 border-lightGray ml-2 pt-1 self-center h-[1px]"></span>
					<div className="flex flex-col pt-2 px-2">
						<FontAwesomeIcon
							icon={faPlaneUp}
							size="sm"
							className="pb-1"
						/>
					</div>
					<span className="border-b-2 w-[30px] border-opacity-90 border-lightGray pt-1 self-center h-[1px]"></span>
					<div className="flex text-[10px] md:text-xs pt-1">
						<FontAwesomeIcon
							className="pt-1 px-2"
							icon={faLocationDot}
							size="sm"
						/>
						<p className="text-center text-lightGray hover:decoration-2">
							200080,
						</p>
						<p className="text-center text-lightGray hover:decoration-2">
							Shanghai
						</p>
					</div>
				</div>
				<div className="flex pt-2">
					<p className="text-[10px] md:text-xs mt-[1px] font-bold">
						<LazyLoadImage
							src={<Img />}
							width={30}
							height={20}
							alt="Logo"
							className="pt-[1px]"
						/>
					</p>
					<p className="text-left mt-[1px] pl-1 text-xs md:text-sm text-lightGray hover:decoration-2">
						Primetime Worldwide
					</p>
					<div className="flex items-center pl-2">
						<svg
							aria-hidden="true"
							className="w-5 h-5 text-purple"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>First star</title>
							<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
						</svg>
						<svg
							aria-hidden="true"
							className="w-5 h-5 text-purple"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>Second star</title>
							<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
						</svg>
						<svg
							aria-hidden="true"
							className="w-5 h-5 text-purple"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>Third star</title>
							<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
						</svg>
						<svg
							aria-hidden="true"
							className="w-5 h-5 text-purple"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>Fourth star</title>
							<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
						</svg>
						<svg
							aria-hidden="true"
							className="w-5 h-5 text-gray "
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<title>Fifth star</title>
							<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
						</svg>
					</div>
				</div>
			</div>
			<div className="flex flex-col h-[12vh] border-t-2 md:border-l-2 pl-2 border-lightGray border-opacity-40">
				<p className="text-md text-center font-semibold">$ 3,659.25</p>
				<button
					type="button"
					className="text-white bg-blue focus:ring-4 focus:outline-none font-medium rounded-2xl text-sm px-8 py-2 gap-x-2 text-center mr-5 mb-2 md:mr-0"
				>
					Select
				</button>
				<p className="text-xs font-medium text-center underline">
					View Details
				</p>
			</div>
		</div>
	);
};

export default detailsCard;
