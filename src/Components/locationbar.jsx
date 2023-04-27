import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const locationbar = () => {
	return (
		<div className="w-[90vw]  h-[42vh] md:h-[8vh] p-2 flex flex-col md:flex-row justify-between content-center self-center shadow-xl rounded bg-white">
			<div className="flex justify-between items-center border-b-[1px] md:border-b-0">
				<span className="p-4 md:p-0 md:pl-4">
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						className="mr-3"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M12 13.43C12.4097 13.43 12.8154 13.3493 13.194 13.1925C13.5725 13.0357 13.9165 12.8059 14.2062 12.5162C14.4959 12.2265 14.7257 11.8825 14.8825 11.504C15.0393 11.1254 15.12 10.7197 15.12 10.31C15.12 9.90028 15.0393 9.49457 14.8825 9.11603C14.7257 8.73749 14.4959 8.39355 14.2062 8.10383C13.9165 7.81411 13.5725 7.58429 13.194 7.4275C12.8154 7.2707 12.4097 7.19 12 7.19C11.1725 7.19 10.3789 7.51872 9.79383 8.10383C9.20872 8.68894 8.88 9.48253 8.88 10.31C8.88 11.1375 9.20872 11.9311 9.79383 12.5162C10.3789 13.1013 11.1725 13.43 12 13.43Z"
							stroke="#868686"
							strokeWidth="1.5"
						/>
						<path
							d="M3.61995 8.49C5.58995 -0.169998 18.42 -0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C14.632 21.4735 13.3397 21.9952 11.995 21.9952C10.6502 21.9952 9.35788 21.4735 8.38995 20.54C5.62995 17.88 2.46995 13.57 3.61995 8.49Z"
							stroke="#868686"
							strokeWidth="1.5"
						/>
					</svg>
				</span>
				<span className="text-lightGray">Origin , Port ,City</span>
			</div>
			<div className="flex justify-between items-center border-b-[1px] md:border-b-0">
				<span className="p-4 md:p-0">
					<svg
						width="24"
						height="24"
						className="mr-3"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M12 13.43C12.4097 13.43 12.8154 13.3493 13.194 13.1925C13.5725 13.0357 13.9165 12.8059 14.2062 12.5162C14.4959 12.2265 14.7257 11.8825 14.8825 11.504C15.0393 11.1254 15.12 10.7197 15.12 10.31C15.12 9.90028 15.0393 9.49457 14.8825 9.11603C14.7257 8.73749 14.4959 8.39355 14.2062 8.10383C13.9165 7.81411 13.5725 7.58429 13.194 7.4275C12.8154 7.2707 12.4097 7.19 12 7.19C11.1725 7.19 10.3789 7.51872 9.79383 8.10383C9.20872 8.68894 8.88 9.48253 8.88 10.31C8.88 11.1375 9.20872 11.9311 9.79383 12.5162C10.3789 13.1013 11.1725 13.43 12 13.43Z"
							stroke="#868686"
							strokeWidth="1.5"
						/>
						<path
							d="M3.61995 8.49C5.58995 -0.169998 18.42 -0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C14.632 21.4735 13.3397 21.9952 11.995 21.9952C10.6502 21.9952 9.35788 21.4735 8.38995 20.54C5.62995 17.88 2.46995 13.57 3.61995 8.49Z"
							stroke="#868686"
							strokeWidth="1.5"
						/>
					</svg>
				</span>
				<span className="text-lightGray">Destination , Port ,City</span>
			</div>
			<div className="flex justify-between items-center border-b-[1px] md:border-l-[1px] md:border-b-0 border-lightGray hover:border-blue ">
				<span className="p-4 md:p-0 md:pl-4">
					<svg
						width="24"
						height="24"
						className="mr-3"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
							stroke="#868686"
							strokeWidth="1.5"
							strokeMiterlimit="10"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M15.6949 13.7H15.7039M15.6949 16.7H15.7039M11.9949 13.7H12.0049M11.9949 16.7H12.0049M8.29395 13.7H8.30395M8.29395 16.7H8.30395"
							stroke="#868686"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</span>
				<span className="text-lightGray pl-4">24 April 2023</span>
			</div>
			<div className="flex justify-between items-center border-b-[1px] md:border-l-[1px] md:border-b-0 border-lightGray hover:border-blue">
				<span className="p-4 md:p-0 md:pl-4">
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
				</span>
				<span className="text-lightGray pl-4">Load</span>
			</div>
			<div className="flex justify-between md:border-l-[1px] border-lightGray hover:border-blue self-end md:self-auto items-center">
				<span className="p-4">
					<Link to="/checkout">
						<button
							type="button"
							className="text-white bg-blue focus:ring-4 focus:outline-none font-medium rounded-xl shadow-2xl text-sm px-[30vw] md:px-2 py-2 gap-x-2 text-center mr-5 mb-2 md:mr-0"
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
