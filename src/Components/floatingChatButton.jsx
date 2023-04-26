import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
const floatingChatButton = () => {
	return (
		<div>
			<button
				// onclick="buttonHandler()"
				title="Contact Sale"
				class="fixed z-90 bottom-10 right-8 bg-blue-600 w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center bg-purple text-white text-4xl hover:bg-blue-700 hover:drop-shadow-2xl hover:animate-bounce duration-300"
			>
				<FontAwesomeIcon icon={faComment} />
			</button>
		</div>
	);
};

export default floatingChatButton;
