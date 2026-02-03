import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work Experience"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="#"
								alt="Accolade Tech Solutions"
								className="work-image"
							/>
							<div className="work-title">
								Accolade Tech Solutions
							</div>
							<div className="work-subtitle">
								Data Analyst Intern
							</div>
							<div className="work-duration">2 Months</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
