import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />

				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							{/* RIGHT SIDE – TEXT */}
							<div className="about-right-side">
								<div className="title about-title">
									About Me
								</div>

								<div className="subtitle about-subtitle">
									I’m an AI Engineer with a strong foundation in
									Data Science and Data Analytics. I enjoy
									building intelligent systems that solve
									real-world problems using machine learning,
									statistical analysis, and data-driven
									approaches.
									<br />
									<br />
									My experience includes working with Python,
									Machine Learning models, data preprocessing,
									exploratory data analysis, and deploying
									AI-powered applications. I’m passionate
									about transforming raw data into meaningful
									insights and scalable solutions.
									<br />
									<br />
									I’m continuously learning and experimenting
									with new technologies in AI, ML, and data
									engineering, and I’m always excited to take
									on challenging projects.
								</div>
							</div>

							{/* LEFT SIDE – IMAGE + SOCIALS */}
							
						</div>

						
					</div>

					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</>
	);
};

export default About;
