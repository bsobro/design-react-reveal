import {
	Play,
	CircleCheckBig,
	Zap,
	LockKeyhole,
	UserRoundCog,
	Cctv,
	ChartNoAxesCombined,
	ShieldCheck,
	Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const TrackBody = () => {
	return (
		<div className="max-w-7xl mx-auto px-2">
			<div className="pt-16 flex flex-col justify-center items-center mb-4 gap-8 text-center">
				<h2 className="text-3xl sm:text-4xl font-semibold max-w-3xl mx-auto">
					Time Tracking for Today’s Flexible Workplace
				</h2>
				<p className="text-gray-600 mx-auto text-base sm:text-2xl max-w-5xl mb-4">
					In today's flexible work environment, accurate time tracking is more
					important than ever. TrackStaff's mission is to enhance transparency,
					boost productivity, and ensure data security for every team, whether
					they're in the office, working remotely, or embracing a hybrid model.
				</p>
				<div className="grid grid-cols-3 gap-8 md:gap-14">
					<div className="flex flex-col items-center gap-3">
						<div className="bg-track rounded-full p-5 md:p-6">
							<CircleCheckBig className="text-white w-8 h-8 md:w-14 md:h-14" />
						</div>
						<p className="text-sm md:text-xl">Transparency</p>
					</div>
					<div className="flex flex-col items-center gap-3">
						<div className="bg-track rounded-full p-5 md:p-6">
							<Zap className="text-white w-8 h-8 md:w-14 md:h-14" />
						</div>
						<p className="text-sm md:text-xl">Productivity</p>
					</div>
					<div className="flex flex-col items-center gap-3">
						<div className="bg-track rounded-full p-5 md:p-6">
							<LockKeyhole className="text-white w-8 h-8 md:w-14 md:h-14" />
						</div>
						<p className="text-sm md:text-xl">Security</p>
					</div>
				</div>
			</div>

			<div className="py-16 flex flex-col justify-center mb-4 gap-8">
				<div className="text-center">
					<h2 className="text-3xl sm:text-4xl font-semibold max-w-3xl mx-auto mb-8">
						Our Process - Simple, Transparent, and Effective
					</h2>
					<p className="text-gray-600 mx-auto text-base sm:text-2xl max-w-5xl mb-8">
						TrackStaff is designed to be intuitive and respectful of user
						privacy, ensuring that time tracking enhances productivity without
						compromising trust.
					</p>
				</div>
				<div className="flex flex-col gap-8">
					<div className="grid grid-cols-12">
						<div className="col-span-1 flex justify-center items-center p-1 sm:p-3 rounded-full bg-track w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14">
							<p className="text-white text-xl md:text-2xl">1</p>
						</div>
						<div className="col-span-11 flex flex-col gap-4 ps-4 lg:ps-0">
							<p className="flex items-center gap-4 text-xl md:text-2xl font-semibold">
								{" "}
								<UserRoundCog className="text-track" />
								User-Controlled Tracking
							</p>
							<p className="text-gray-600 text-base md:text-2xl">
								You have complete control over when tracking begins and ends.
								Manually start and stop the timer to ensure only work time is
								recorded. Clear visual indicators show when tracking is active,
								giving you confidence and control over your data.
							</p>
						</div>
					</div>
					<div className="grid grid-cols-12">
						<div className="col-span-1 flex justify-center items-center p-1 sm:p-3 rounded-full bg-track w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14">
							<p className="text-white text-xl md:text-2xl">2</p>
						</div>
						<div className="col-span-11 flex flex-col gap-4 ps-4 lg:ps-0">
							<p className="flex items-center gap-4 text-xl md:text-2xl font-semibold">
								{" "}
								<Cctv className="text-track" /> Real-Time Monitoring
							</p>
							<p className="text-gray-600 text-base md:text-2xl">
								The system monitors work activity through application usage,
								website tracking, and optional screenshots (if enabled). Full
								transparency means you can see exactly what's being tracked at
								all times, ensuring data integrity and building trust.
							</p>
						</div>
					</div>
					<div className="grid grid-cols-12">
						<div className="col-span-1 flex justify-center items-center p-1 sm:p-3 rounded-full bg-track w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14">
							<p className="text-white text-xl md:text-2xl">3</p>
						</div>
						<div className="col-span-11 flex flex-col gap-4 ps-4 lg:ps-0">
							<p className="flex items-center gap-4 text-xl md:text-2xl font-semibold">
								{" "}
								<ChartNoAxesCombined className="text-track" /> Data Analysis &
								Reporting
							</p>
							<p className="text-gray-600 text-base md:text-2xl">
								Your tracking data is processed to provide insightful analytics,
								reports, and productivity scores. Customize reports to monitor
								performance, track projects, or manage payroll. The powerful
								dashboard makes it easy to visualize your team's progress.
							</p>
						</div>
					</div>
					<div className="grid grid-cols-12">
						<div className="col-span-1 flex justify-center items-center p-1 sm:p-3 rounded-full bg-track w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14">
							<p className="text-white text-xl md:text-2xl">4</p>
						</div>
						<div className="col-span-11 flex flex-col gap-4 ps-4 lg:ps-0">
							<p className="flex items-center gap-4 text-xl md:text-2xl font-semibold">
								{" "}
								<ShieldCheck className="text-track" />
								Data Privacy & Control
							</p>
							<p className="text-gray-600 text-base md:text-2xl">
								Users have full access to and control over their data. Review,
								modify, or delete entries as needed. TrackStaff implements
								robust security protocols to ensure your information is
								protected and always remains your property.
							</p>
						</div>
					</div>
				</div>
			</div>

			<div className="py-16 flex flex-col justify-center mb-4 gap-8">
				<div className="text-center">
					<h2 className="text-3xl sm:text-4xl font-semibold max-w-3xl mx-auto mb-8">
						Implementation Process
					</h2>
					<p className="text-gray-600 mx-auto text-base sm:text-2xl max-w-5xl mb-8">
						Getting started with TrackStaff is easy. Our team guides you through
						every step of the implementation process.
					</p>
				</div>
				<div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 ">
					<div className="flex flex-col justify-between gap-8 relative md:pt-8 overflow-hidden">
						<div className="absolute left-[14px] sm:left-[22px] md:left-[26px] top-8 w-1 h-full bg-track -z-10"></div>
						<div className="grid grid-cols-12">
							<div className="col-span-1 flex justify-center items-center p-1 sm:p-3 rounded-full bg-track w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14">
								<p className="text-white text-xl md:text-2xl">1</p>
							</div>
							<div className="col-span-11 flex flex-col gap-4 ps-4 md:ps-12">
								<p className="flex items-center gap-4 text-xl md:text-2xl font-semibold">
									Initial Consultation
								</p>
								<p className="text-gray-600 text-base md:text-2xl">
									We'll discuss your needs and goals to tailor the perfect
									tracking solution.
								</p>
							</div>
						</div>
						<div className="grid grid-cols-12">
							<div className="col-span-1 flex justify-center items-center p-1 sm:p-3 rounded-full bg-track w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14">
								<p className="text-white text-xl md:text-2xl">2</p>
							</div>
							<div className="col-span-11 flex flex-col gap-4 ps-4 md:ps-12">
								<p className="flex items-center gap-4 text-xl md:text-2xl font-semibold">
									Account Setup
								</p>
								<p className="text-gray-600 text-base md:text-2xl">
									Our team configures your workspace with projects, teams, and
									tracking parameters.
								</p>
							</div>
						</div>
						<div className="grid grid-cols-12">
							<div className="col-span-1 flex justify-center items-center p-1 sm:p-3 rounded-full bg-track w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14">
								<p className="text-white text-xl md:text-2xl">3</p>
							</div>
							<div className="col-span-11 flex flex-col gap-4 ps-4 md:ps-12">
								<p className="flex items-center gap-4 text-xl md:text-2xl font-semibold">
									Team Training
								</p>
								<p className="text-gray-600 text-base md:text-2xl">
									Comprehensive onboarding sessions to ensure your team is
									comfortable with the software.
								</p>
							</div>
						</div>
						<div className="grid grid-cols-12">
							<div className="col-span-1 flex justify-center items-center p-1 sm:p-3 rounded-full bg-track w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14">
								<p className="text-white text-xl md:text-2xl">4</p>
							</div>
							<div className="col-span-11 flex flex-col gap-4 ps-4 md:ps-12">
								<p className="flex items-center gap-4 text-xl md:text-2xl font-semibold">
									Ongoing Support
								</p>
								<p className="text-gray-600 text-base md:text-2xl">
									Dedicated support team available to answer questions and
									provide assistance.
								</p>
							</div>
						</div>
					</div>
					<div className="flex flex-col gap-12 pt-12 md:pt-0 items-center">
						<h4 className="text-2xl font-semibold max-w-3xl mx-auto">
							Benefits of our Implementation Process
						</h4>
						<ul className="flex flex-col gap-12 ">
							<li className="flex items-start gap-4">
								<div className="flex items-center">
									<Check className="bg-track text-white rounded-full text-2xl md:text-3xl" />
								</div>
								<div className="flex flex-col gap-2">
									<span className="text-xl md:text-2xl font-semibold">
										Minimal Disruption
									</span>
									<p className="text-gray-600 text-base md:text-2xl">
										Our implementation is designed to integrate seamlessly with
										your existing workflows.
									</p>
								</div>
							</li><li className="flex items-start gap-4">
								<div className="flex items-center">
									<Check className="bg-track text-white rounded-full text-2xl md:text-3xl" />
								</div>
								<div className="flex flex-col gap-2">
									<span className="text-xl md:text-2xl font-semibold">
										Minimal Disruption
									</span>
									<p className="text-gray-600 text-base md:text-2xl">
										Our implementation is designed to integrate seamlessly with
										your existing workflows.
									</p>
								</div>
							</li>
							<li className="flex items-start gap-4">
								<div className="flex items-center">
									<Check className="bg-track text-white rounded-full text-2xl md:text-3xl" />
								</div>
								<div className="flex flex-col gap-2">
									<span className="text-xl md:text-2xl font-semibold">
										Minimal Disruption
									</span>
									<p className="text-gray-600 text-base md:text-2xl">
										Our implementation is designed to integrate seamlessly with
										your existing workflows.
									</p>
								</div>
							</li>
							<li className="flex items-start gap-4">
								<div className="flex items-center">
									<Check className="bg-track text-white rounded-full text-2xl md:text-3xl" />
								</div>
								<div className="flex flex-col gap-2">
									<span className="text-xl md:text-2xl font-semibold">
										Minimal Disruption
									</span>
									<p className="text-gray-600 text-base md:text-2xl">
										Our implementation is designed to integrate seamlessly with
										your existing workflows.
									</p>
								</div>
							</li>
						</ul>
						<Button className="bg-track hover:bg-track-dark text-white text-xl lg:text-2xl rounded-lg md:py-6 lg:py-7 w-fit">
							Schedule a Consultation 
						</Button>
					</div>
				</div>
			</div>

			<div className="mx-auto py-16">
				<div className="text-center mb-12">
					<h2 className="text-3xl sm:text-4xl font-semibold mb-4">
						See TrackStaff in Action
					</h2>
					<p className="text-gray-600 mx-auto text-base sm:text-2xl">
						Watch how easy it is to get started and use our intuitive tracking
						platform.
					</p>
				</div>

				<div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
					<div className="relative">
						<img
							src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
							alt="TrackStuff Interface"
							className="w-full aspect-video object-cover"
						/>

						<div className="absolute inset-0 bg-gray-900 bg-opacity-40 flex items-center justify-center">
							<button className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg transition-colors duration-300">
								<Play className="h-6 w-6 text-track fill-current ml-1" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TrackBody;
