import React, { lazy } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Img from "../assets/frame.jpg";
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
							<svg
								width="auto"
								height="40px"
								className="border-b-2 pb-1"
								viewBox="0 0 33 27"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M24.2135 23.8485L24.819 23.3969C25.0962 23.1901 25.266 22.8698 25.2816 22.5243L25.7775 11.4929L31.6963 6.18043C32.1401 5.78206 32.207 5.11096 31.8504 4.63287L31.6472 4.36028C31.2905 3.88219 30.6283 3.75487 30.1199 4.06669L23.3401 8.22474L13.0862 6.17632C12.7657 6.11227 12.433 6.18731 12.1709 6.38274L11.6007 6.80802C10.8822 7.34388 11.023 8.45872 11.8522 8.79914L18.7646 11.6371L14.7197 15.0859C14.4835 15.2873 14.176 15.385 13.8668 15.3567L11.0421 15.0991C10.9393 15.0897 10.8341 15.0899 10.7373 15.1257C10.6585 15.1548 10.5841 15.1951 10.5164 15.2456C9.99223 15.6366 10.0627 16.4424 10.6467 16.7364L13.3513 18.0902C13.5239 18.1766 13.6419 18.3436 13.6655 18.5353L13.9935 21.1983C14.1115 21.8574 14.8818 22.1619 15.4185 21.7616C15.4654 21.7266 15.5086 21.6873 15.5477 21.6442C15.6224 21.5616 15.6627 21.4554 15.6914 21.3477L16.4533 18.4872C16.5244 18.2202 16.6891 17.9876 16.9173 17.8318L21.2024 14.9053L22.3812 23.0778C22.4985 23.9492 23.5087 24.3741 24.2135 23.8485Z"
									fill="black"
								/>
								<line
									x1="11.0125"
									y1="10.6305"
									x2="1.86166"
									y2="17.4552"
									stroke="black"
								/>
								<line
									x1="19.9533"
									y1="21.2549"
									x2="14.7243"
									y2="25.1547"
									stroke="black"
								/>
								<line
									x1="9.84946"
									y1="18.6184"
									x2="4.62038"
									y2="22.5182"
									stroke="black"
								/>
							</svg>
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
							<svg
								width="65"
								height="66"
								className="mb-2"
								viewBox="0 0 65 66"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M27.0833 60.0833H37.9167C51.4583 60.0833 56.875 54.6667 56.875 41.125V24.875C56.875 11.3333 51.4583 5.91666 37.9167 5.91666H27.0833C13.5417 5.91666 8.125 11.3333 8.125 24.875V41.125C8.125 54.6667 13.5417 60.0833 27.0833 60.0833Z"
									stroke="#5C5C5C"
									strokeWidth="3.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M46.7187 22.9521C42.8004 19.4712 37.7412 17.5486 32.5 17.5486C27.2588 17.5486 22.1996 19.4712 18.2812 22.9521L24.1854 32.4313C26.4742 30.3905 29.4335 29.2627 32.5 29.2627C35.5665 29.2627 38.5258 30.3905 40.8146 32.4313L46.7187 22.9521Z"
									stroke="#5C5C5C"
									strokeWidth="3.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
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
						<p className="mt-10 flex text-center text-xl font-bold hover:decoration-2">
							<span>
								<svg
									width="23"
									height="35"
									viewBox="0 0 23 35"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M22.4168 16.9816L17.4942 8.54592L13.2338 1.11396C13.1455 0.961566 13.0175 0.834119 12.8627 0.744226C12.7078 0.654332 12.5314 0.605104 12.3508 0.60141H1.46804C1.2801 0.608969 1.09802 0.666885 0.942109 0.768698C0.786199 0.870513 0.662586 1.01222 0.585054 1.17803C0.492092 1.35312 0.443604 1.54713 0.443604 1.74397C0.443604 1.94081 0.492092 2.13481 0.585054 2.30991L9.41488 17.5582L0.982398 32.5076C0.889572 32.6789 0.841084 32.8694 0.841084 33.0628C0.841084 33.2563 0.889572 33.4468 0.982398 33.6181C1.06302 33.7858 1.18416 33.9323 1.33559 34.0452C1.40885 34.0358 1.48308 34.0358 1.55634 34.0452C1.65912 34.0547 1.76259 34.0547 1.86538 34.0452H12.9027C13.0889 34.042 13.2704 33.9883 13.4265 33.8901C13.5826 33.7919 13.7071 33.6533 13.7856 33.49L17.7812 26.3783L22.4168 18.1989C22.5193 18.019 22.573 17.817 22.573 17.6116C22.573 17.4063 22.5193 17.2042 22.4168 17.0243"
										fill="#FFE600"
									/>
								</svg>
							</span>
							<span>
								<svg
									width="18"
									height="35"
									viewBox="0 0 18 35"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M17.1912 32.529L8.36137 17.4088L16.7718 2.30997C16.8595 2.13717 16.9051 1.94722 16.9051 1.75471C16.9051 1.56221 16.8595 1.37226 16.7718 1.19945C16.6965 1.03214 16.5733 0.889057 16.417 0.786943C16.2606 0.68483 16.0774 0.627906 15.8888 0.622833H4.85154C4.66878 0.628654 4.49086 0.681101 4.3358 0.77486C4.18074 0.868619 4.05404 1.00036 3.96852 1.15674L0.81189 6.94427L6.19807 16.2128C6.432 16.6174 6.55485 17.0733 6.55485 17.5369C6.55485 18.0005 6.432 18.4564 6.19807 18.861L1.16505 27.9374L4.56457 33.7249C4.64928 33.8757 4.77335 34.0023 4.92439 34.0922C5.07542 34.1822 5.24818 34.2322 5.42546 34.2375H16.4407C16.6307 34.2269 16.8144 34.168 16.9732 34.0667C17.1321 33.9655 17.2606 33.8255 17.3458 33.6609C17.4387 33.4858 17.4872 33.2918 17.4872 33.0949C17.4872 32.8981 17.4387 32.7041 17.3458 32.529"
										fill="#FFE600"
									/>
								</svg>
							</span>
							XCOVER.COM
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default cards;
