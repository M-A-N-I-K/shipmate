import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faXmark } from "@fortawesome/free-solid-svg-icons";
import { ThemeProvider } from "styled-components";
import ChatBot from "react-simple-chatbot";

const floatingChatButton = () => {
	const [isShow, setIsShow] = useState(false);
	const steps = [
		{
			id: "Greet",
			message: "Hello, Welcome to our Website",
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
		<div className="fixed bottom-0 right-0 m-10">
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
				<FontAwesomeIcon icon={faComment} />
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
