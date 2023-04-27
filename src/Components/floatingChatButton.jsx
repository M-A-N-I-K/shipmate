import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { ThemeProvider } from "styled-components";
import ChatBot from "react-simple-chatbot";

const floatingChatButton = () => {
	const [isShow, setIsShow] = useState(false);
	const steps = [
		{
			id: "Greet",
			message: "Hello, Welcome to Shipemate!",
			trigger: "Done",
		},

		{
			id: "Done",
			message: "Please enter your name!",
			trigger: "waiting1",
		},

		{
			id: "waiting1",
			user: true,
			trigger: "Name",
		},

		{
			id: "Name",
			message: "Hi {previousValue}, Please select your issue",
			trigger: "issues",
		},

		{
			id: "issues",
			options: [
				{
					value: "Package Not Shipped",
					label: "Package Not Shipped",
					trigger: "Package Not Shipped",
				},
				{
					value: "Package Not Delivered",
					label: "Package Not Delivered",
					trigger: "Package Not Delivered",
				},
			],
		},

		{
			id: "Package Not Shipped",
			message:
				"Thanks for letting us know your issue, Our team will ship your package ASAP",
			end: true,
		},

		{
			id: "Package Not Delivered",
			message:
				"Thanks for letting us know your issue, Our team will deliver your package ASAP",
			end: true,
		},
	];

	const theme = {
		background: "#f5f8fb",
		fontFamily: "Helvetica Neue",
		headerBgColor: "#9747FF",
		headerFontColor: "#fff",
		headerFontSize: "15px",
		botBubbleColor: "#6F57E9",
		botFontColor: "#fff",
		userBubbleColor: "#9747FF",
		userFontColor: "#FFFFFF",
	};

	const handleClick = () => {
		setIsShow(!isShow);
	};
	return (
		<div className="fixed bottom-0 z-[1000] right-0 m-10">
			{isShow && (
				<button
					onClick={handleClick}
					title="Cancel"
					className="fixed z-90 bottom-3/4 right-8 bg-blue-600 w-10 h-10 rounded-full drop-shadow-lg flex justify-center items-center bg-purple text-white text-2xl hover:bg-blue-700 hover:drop-shadow-2xl hover:animate-bounce duration-300"
				>
					<FontAwesomeIcon icon={faXmark} />
				</button>
			)}
			<button
				onClick={handleClick}
				title="Chat Bot"
				className="fixed z-90 bottom-10 right-8 bg-blue-600 w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center bg-purple text-white text-3xl hover:bg-blue-700 hover:drop-shadow-2xl hover:animate-bounce duration-300"
			>
				<svg
					width="32"
					height="33"
					viewBox="0 0 32 33"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M11.724 14.5469H20.8386M9.77085 24.8724H14.9792L20.7735 28.7266C20.969 28.8569 21.1963 28.9317 21.431 28.9431C21.6657 28.9544 21.8992 28.9017 22.1063 28.7908C22.3135 28.6799 22.4867 28.5148 22.6074 28.3131C22.7281 28.1115 22.7918 27.8808 22.7917 27.6458V24.8724C26.6979 24.8724 29.3021 22.2682 29.3021 18.362V10.5495C29.3021 6.64323 26.6979 4.03906 22.7917 4.03906H9.77085C5.8646 4.03906 3.26044 6.64323 3.26044 10.5495V18.362C3.26044 22.2682 5.8646 24.8724 9.77085 24.8724Z"
						stroke="white"
						strokeWidth="2.9375"
						strokeWiterlimit="10"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</button>
			{isShow && (
				<ThemeProvider theme={theme}>
					<ChatBot steps={steps} />
				</ThemeProvider>
			)}
		</div>
	);
};

export default floatingChatButton;
