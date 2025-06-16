
import PricingPlans from "@/components/pricing/PricingPlans";

const Pricing = () => {
	return (
		<div className="flex flex-col min-h-screen">
			
			<main className="flex-grow">
				<div className="text-center max-w-5xl mx-auto pt-16 pb-8 px-4">
					<h2 className="text-4xl md:text-5xl font-semibold mb-4">
						Affordable Pricing Plans
					</h2>
					<p className="text-gray-600 text-lg md:text-2xl mb-8">
						Our TrackStaff software service offers comprehensive, scalable
						solutions <br className="hidden lg:block" /> designed to meet the
						unique needs of both basic startups and large enterprises.
					</p>
				</div>
				<PricingPlans />
			</main>
			
		</div>
	);
};

export default Pricing;
