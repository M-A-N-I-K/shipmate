import React, { useState } from "react";
import "./progressBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
const Stepper = () => {
	const steps = ["Search", "Recommended", "Results", "Booking"];
	const [currentStep, setCurrentStep] = useState(1);
	const [complete, setComplete] = useState(false);
	return (
		<>
			<div className="w-[320px] h-[90px] md:w-[573px] md:h-[63px] flex justify-between">
				{steps?.map((step, i) => (
					<div
						key={i}
						className={`step-item ${currentStep === i + 1 && "active"} ${
							(i + 1 < currentStep || complete) && "complete"
						} `}
					>
						<div className="step">
							{i + 1 < currentStep || complete ? (
								<FontAwesomeIcon icon={faCheck} size={24} />
							) : (
								i + 1
							)}
						</div>
						<p className="text-gray-500">{step}</p>
					</div>
				))}
			</div>
		</>
	);
};

export default Stepper;
