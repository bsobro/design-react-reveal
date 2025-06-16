import React from "react";
import pricingData from "@/components/pricing/pricing.json";
import { Check, X, CircleAlert } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingPlans: React.FC = () => {
	return (
		<section className="bg-white">
			<div className="container mx-auto px-4 max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{pricingData.plans.map((plan) => (
					<div
						key={plan.id}
						className="flex flex-col p-6 border border-gray-200 rounded-lg shadow-lg"
					>
						<div className="flex items-center mb-4 gap-4">
							<div className="w-12 h-12 bg-track-light text-track rounded-lg p-2 flex items-center justify-center mr-2">
								<div className="w-7 h-7 bg-track text-white rounded-full flex items-center justify-center font-bold">{plan.id}</div>
							</div>
							<h3 className="text-2xl font-semibold">{plan.name}</h3>
						</div>
						<p className="text-lg text-gray-600 mb-4">{plan.description}</p>
						<p className="text-5xl font-bold mb-4">Rs. {plan.price}</p>
						<p className="text-lg text-gray-600 mb-4">{plan.priceDescription}</p>
						<p className="text-lg font-semibold mb-4">What's included</p>
						<div className="space-y-2 mb-4 grow">
							<ul className="space-y-2 mb-4">
								{plan.features.map((feature) => (
									<li key={feature} className="flex items-center">
										<div className="w-7 h-7 bg-track text-white rounded-full p-1 flex items-center justify-center mr-2">
											<Check />
										</div>
										<span className="text-lg">{feature}</span>
									</li>
								))}
							</ul>
							<ul className="space-y-2 mb-4">
								{plan.notAvailable.map((feature) => (
									<li key={feature} className="flex items-center">
										<div className="w-7 h-7 bg-gray-300 text-white rounded-full flex items-center justify-center mr-2">
											<X />
										</div>
										<span className="text-lg">{feature}</span>
									</li>
								))}
							</ul>
						</div>
						<div className="flex justify-center">
							<Button className="bg-track hover:bg-track-dark py-9 rounded-full text-2xl w-screen">
								Get Started
							</Button>
						</div>
					</div>
				))}
			</div>
			<div className="text-gray-400 mt-12 px-4 max-w-7xl mx-auto flex items-center pb-8">
				<div className="flex items-center p-2 bg-gray-100 rounded-lg mr-2">
					<CircleAlert className="w-5 h-5 text-gray-500" />
				</div>
				<p>
					The price shown above is the actual price, and a 13% VAT will be
					added.
				</p>
			</div>
		</section>
	);
};

export default PricingPlans;
