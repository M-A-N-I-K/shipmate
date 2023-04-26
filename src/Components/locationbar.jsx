import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLocationDot,
	faCalendarDays,
	faBug,
	faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const locationbar = () => {
	return (
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
					<Link to="/checkout">
						<button
							type="button"
							className="text-white bg-blue focus:ring-4 focus:outline-none font-medium rounded-xl shadow-2xl  text-sm px-40 md:px-2 py-2 gap-x-2 text-center mr-5 mb-2 md:mr-0"
						>
							<FontAwesomeIcon icon={faArrowRight} />
						</button>
					</Link>
				</span>
			</div>
		</div>
	);
};

export default locationbar;
