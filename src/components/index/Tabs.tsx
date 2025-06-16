import { useState } from "react";
import solutionsData from "@/components/solutions/solutions-menu.json";


const Tabs = () => {
	// State to track the active tab
	const [activeTab, setActiveTab] = useState("1");


	return (
		<div className="w-full mx-auto border border-slate-200 rounded-lg">
			{/* Tab Headers */}
			<div className="flex flex-wrap justify-between bg-slate-50 border-b">
				{solutionsData.solutions.map((solution) => (
					<button
						key={solution.id}
						onClick={() => setActiveTab(solution.id)}
						className={`p-2 font-medium transition-colors duration-300 grow text-base ${
							activeTab === solution.id
								? "border-b-2 border-track text-track"
								: "text-gray-500 hover:text-track"
						}`}
					>
						{solution.title}
					</button>
				))}
			</div>

			{/* Tab Content */}
			<div className="p-4">
				{solutionsData.solutions.map((solution) => (
					<div
                    key={solution.id}
                    className={`${activeTab === solution.id ? "block" : "hidden"}`}
                    >
						<img src={solution.image} alt={solution.title} className="mt-4 shadow-md w-full max-h-[450px] object-cover" />
						<div className="mt-4">
							<h3 className="text-2xl font-semibold mb-2">{solution.title}</h3>
							<p className="text-gray-600 mb-4">{solution.description}</p>
						</div>
						<ul className="flex flex-wrap gap-2 mb-4">
							{solution.features.map((feature) => (
								<li key={feature} className="flex items-center">
									<p className="px-4 py-1 bg-track-light text-track rounded-3xl border-0">
										{feature}
									</p>
								</li>
							))}
						</ul>

						<p key={solution.id} className="text-lg text-gray-600 mb-4 italic text-balance">{solution.shortDesc}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Tabs;
