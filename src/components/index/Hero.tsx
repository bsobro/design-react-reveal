import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
	return (
		<section className="hero-gradient py-12 mx-auto">
			<div className="container mx-auto px-4 max-w-7xl">
				<div className="max-w-5xl mx-auto text-center">
					<span className=" text-track-dark bg-[#1bb1893b] mb-8 mx-auto py-2 px-6 rounded-3xl text-base sm:text-lg">
						Employee Time Tracking Simplified
					</span>
					<h1 className="text-3xl sm:text-4xl lg:text-5xl/[1.2] font-semibold leading-normal my-6 tracking-wide md:max-w-2xl lg:max-w-3xl mx-auto">
						Monitor Every Aspect of
						<span className="text-track"> Productivity </span>
						with TrackStaff
					</h1>

					<p className="text-base sm:text-2xl text-gray-600 mb-8 mx-auto">
						Track keystrokes, mouse movements, screenshots, and more. The
						all-in-one solution for modern teams to stay productive and aligned.
					</p>

					<div className="flex flex-wrap justify-center items-center gap-4">          
						<Button className="bg-track hover:bg-track-dark text-white px-4 py-1 text-xl rounded-3xl [&_svg]:size-7">
							Start Your Free Trial 
							<ArrowRight  />  {/* arrow right */}
						</Button>
						<Link to="/solutions">
						<Button
							variant="outline"
							className="border-track hover:bg-track hover:text-white text-track px-4 text-xl rounded-3xl"
						>
							Explore Features
						</Button></Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;

