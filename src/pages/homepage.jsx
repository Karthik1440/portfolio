import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";

import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faGithub,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import Logo from "../components/common/logo";
import Footer from "../components/common/footer";
import NavBar from "../components/common/navBar";
import Article from "../components/homepage/article";
import Works from "../components/homepage/works";
import AllProjects from "../components/projects/allProjects";

import SEO from "../data/seo";
import myArticles from "../data/articles";

import "./styles/homepage.css";

const Homepage = () => {
	const [stayLogo, setStayLogo] = useState(false);
	const [logoSize, setLogoSize] = useState(80);
	const [oldLogoSize, setOldLogoSize] = useState(80);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			const scroll = window.pageYOffset;
			const newLogoSize = 80 - (scroll * 4) / 10;

			if (newLogoSize < oldLogoSize) {
				if (newLogoSize > 40) {
					setLogoSize(newLogoSize);
					setOldLogoSize(newLogoSize);
					setStayLogo(false);
				} else {
					setStayLogo(true);
				}
			} else {
				setLogoSize(newLogoSize);
				setStayLogo(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, [oldLogoSize]);

	const currentSEO = SEO.find((item) => item.page === "home");

	const logoStyle = {
		display: "flex",
		position: stayLogo ? "fixed" : "relative",
		top: stayLogo ? "3vh" : "auto",
		zIndex: 999,
		border: stayLogo ? "1px solid white" : "none",
		borderRadius: stayLogo ? "50%" : "none",
		boxShadow: stayLogo
			? "0px 4px 10px rgba(0, 0, 0, 0.25)"
			: "none",
	};

	return (
		<>
			<Helmet>
				<title>Karthik | AI Engineer & Data Scientist</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="home" />

				<div className="content-wrapper">
					<div className="homepage-logo-container">
						<div style={logoStyle}>
							<Logo width={logoSize} link={false} />
						</div>
					</div>

					<div className="homepage-container">
						<div className="homepage-first-area">
							<div className="homepage-first-area-left-side">
								<div className="title homepage-title">
									Hi, I’m Karthik 👋
								</div>

								<div className="subtitle homepage-subtitle">
									AI Engineer with strong experience in
									Data Science and Data Analytics. I build
									intelligent systems, analyze complex
									datasets, develop machine learning models,
									and turn data into real-world insights.
								</div>
							</div>

							<div className="homepage-first-area-right-side">
								<div className="homepage-image-container">
									<div className="homepage-image-wrapper">
										<img
											src="/logo.png"
											alt="Karthik AI Engineer"
											className="homepage-image"
										/>
									</div>
								</div>
							</div>
						</div>

						{/* SOCIAL LINKS */}
						<div className="homepage-socials">
							<a href="https://github.com/Karthik1440" target="_blank" rel="noreferrer">
								<FontAwesomeIcon icon={faGithub} className="homepage-social-icon" />
							</a>
							<a href="https://www.linkedin.com/in/karthik-p-54102a27a/" target="_blank" rel="noreferrer">
								<FontAwesomeIcon icon={faLinkedin} className="homepage-social-icon" />
							</a>
							<a href="mailto:karthikpullayikode@gmail.com">
								<FontAwesomeIcon icon={faMailBulk} className="homepage-social-icon" />
							</a>
						</div>

						{/* PROJECTS */}
						<div className="homepage-projects">
							<AllProjects />
						</div>

						{/* ARTICLES + WORKS */}
						<div className="homepage-after-title">
							<div className="homepage-articles">
								{myArticles.map((article, index) => (
									<div className="homepage-article" key={index}>
										<Article
											date={article().date}
											title={article().title}
											description={article().description}
											link={`/article/${index + 1}`}
										/>
									</div>
								))}
							</div>

							<div className="homepage-works">
								<Works />
							</div>
						</div>

						<div className="page-footer">
							<Footer />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Homepage;
