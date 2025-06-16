import { useState, useEffect } from "react";
import supportHelp from "@/components/resources/support/supportHelp.json";
import { ChevronUp, ChevronDown } from "lucide-react";
const SupportFaqs = () => {
	// Load data from JSON (static import)
	const [items, setItems] = useState([]);
	const [activeIndex, setActiveIndex] = useState(null);

	useEffect(() => {
		// Simulate fetching data dynamically (optional)
		setItems(supportHelp.faq);
	}, []);

	const toggleAccordion = (index) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<section className="py-16">
			<div className="max-w-7xl mx-auto px-4">
				<div className="w-full max-w-4xl mx-auto">
					<div className="text-center">
						<h3 className="text-4xl font-semibold mb-16">
							Frequently Asked Questions
						</h3>
					</div>
					{items.map((item, index) => (
						<div key={index} className="border-b border-gray-200">
							{/* Accordion Title */}
							<button
								className={`w-full flex px-4 py-4 hover:bg-track-light transition-colors duration-200 focus:outline-none text-left ${
									activeIndex === index ? "bg-track-light" : ""
								}`}
								onClick={() => toggleAccordion(index)}
								aria-expanded={activeIndex === index}
							>
								<div className="text-lg font-medium grow">{item.question}</div>
								<div className="flex items-center">
									{activeIndex === index ? <ChevronUp /> : <ChevronDown />}
								</div>
							</button>

							{/* Accordion Content */}
							{activeIndex === index && (
								<div className="px-4 py-3 text-gray-700 bg-white">
									<p>{item.answer}</p>
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default SupportFaqs;
