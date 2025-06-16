import React, { useState } from "react";
import faqData from "./faqData.json"; // Import the JSON data
import { ChevronRight } from "lucide-react";

const FaqTabs: React.FC = () => {
	// State to track the active section
	const [activeSection, setActiveSection] = useState<string>("1");

	// Filter questions based on the active section
	const currentSection = faqData.faq.find(
		(item) => item.id === activeSection
	);

	return (
		<div className="flex flex-col md:flex-row min-h-fit">
			{/* Left Navigation Tabs */}
			<div className="w-auto md:w-2/6 py-8 bg-white">
				<h2 className="pr-6 pb-2 text-2xl font-medium text-gray-700 border-b border-gray-400 lg:py-5">
					Frequently Asked Questions
				</h2>
				<ul className="mt-4 space-y-2 pb-3 border-b border-gray-400">
					{faqData.faq.map((section) => (
						<li key={section.id}>
							<button
								onClick={() => setActiveSection(section.id)}
								className={`flex items-start w-full p-3 text-left text-xl rounded-md ${
									activeSection === section.id
										? "bg-track text-white"
										: "text-gray-600 hover:bg-track-light"
								}`}
							>
								<div className="flex items-center w-6 h-6">
									<ChevronRight size={24} className="mt-[2px]" />
								</div>
								{section.section}
							</button>
						</li>
					))}
				</ul>
			</div>

			{/* Right Content (Questions and Answers) */}
			<div className="w-auto md:w-4/6 p-4 md:p-8">
				<h1 className="mb-6 text-2xl font-medium text-gray-800 border-b border-gray-400 pb-3 md:py-5">
					{currentSection?.section}
				</h1>
				{currentSection?.questions.map((qa, index) => (
					<div key={index} className="mb-6">
						<h3 className="text-lg font-medium text-gray-700">{qa.question}</h3>
						<p className="mt-2 text-gray-600">{qa.answer}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default FaqTabs;
