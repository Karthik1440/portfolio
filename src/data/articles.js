import React from "react";

function article_1() {
	return {
		date: "7 May 2023",
		title: "The Benefits of Cloud Computing",
		description:
			"Cloud computing enables scalable, cost-effective, and secure infrastructure for modern applications. This article explores why cloud adoption continues to grow across industries.",
		keywords: [
			"The Benefits of Cloud Computing",
			"Karthik",
			"Karthik AI Engineer",
			"Cloud Computing",
			"AWS Azure GCP",
		],
		style: `
			.article-content {
				display: flex;
				flex-direction: column;
				align-items: center;
				max-width: 800px;
				margin: auto;
			}

			.randImage {
				align-self: center;
				margin-top: 20px;
				border-radius: 8px;
			}

			.paragraph {
				margin-bottom: 16px;
				line-height: 1.7;
				font-size: 1.05rem;
			}
		`,
		body: (
			<>
				<div className="article-content">
					<div className="paragraph">
						Cloud computing has revolutionized the way organizations
						build, deploy, and scale applications. Instead of
						investing heavily in physical infrastructure, businesses
						can leverage cloud platforms to access computing
						resources on demand.
					</div>

					<div className="paragraph">
						One of the key advantages of cloud computing is cost
						efficiency. Companies pay only for the resources they
						use, reducing capital expenditure while improving
						operational flexibility. This makes cloud adoption
						particularly attractive for startups and growing
						enterprises.
					</div>

					<div className="paragraph">
						From an AI and data perspective, cloud platforms enable
						scalable machine learning pipelines, big data
						processing, and model deployment. Services from AWS,
						Azure, and Google Cloud provide powerful tools that help
						data scientists and engineers move from experimentation
						to production efficiently.
					</div>

					<img
						src="https://picsum.photos/600/300"
						alt="Cloud computing illustration"
						className="randImage"
					/>
				</div>
			</>
		),
	};
}

function article_2() {
	return {
		date: "15 June 2023",
		title: "Artificial Intelligence in Healthcare",
		description:
			"Artificial Intelligence is transforming healthcare by improving diagnostics, patient care, and operational efficiency. This article explores real-world AI applications in the medical domain.",
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Karthik",
			"AI in Healthcare",
			"Machine Learning",
			"Data Science",
		],
		style: `
			.article-content {
				max-width: 800px;
				margin: auto;
				line-height: 1.7;
				font-size: 1.05rem;
			}

			.paragraph {
				margin-bottom: 18px;
			}
		`,
		body: (
			<>
				<div className="article-content">
					<div className="paragraph">
						Artificial Intelligence is playing a critical role in
						modern healthcare by enabling faster and more accurate
						decision-making. Machine learning models are now capable
						of analyzing medical images, patient records, and
						genomic data with remarkable precision.
					</div>

					<div className="paragraph">
						AI-powered diagnostic tools assist doctors in detecting
						diseases such as cancer, heart conditions, and
						neurological disorders at earlier stages. This not only
						improves patient outcomes but also reduces the overall
						burden on healthcare systems.
					</div>

					<div className="paragraph">
						Beyond diagnostics, AI is also improving hospital
						operations through predictive analytics, automated
						scheduling, and personalized treatment plans. As data
						availability increases, AI-driven healthcare solutions
						will continue to evolve and reshape the industry.
					</div>
				</div>
			</>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
