import {
	PhoneCall,
	Mail,
	MapPin,
	Facebook,
	Instagram,
	Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
	const form = useForm();
	return (
		<div className="flex flex-col min-h-fit">
			<main className="flex-grow py-6 max-w-6xl mx-auto px-4">
				<div className="text-center">
					<h2 className="text-4xl md:text-5xl font-semibold mb-2">
						Contact Us
					</h2>
					<p className="text-lg md:text-xl text-gray-600">
						Any questions or remarks? Just write us a message!
					</p>
				</div>
				<div className="flex flex-col md:flex-row gap-8 md:gap-4 lg:gap-8 my-12 mx-auto ">
					<div className="flex flex-col justify-center space-y-4 bg-track text-white p-8 rounded-xl md:w-2/5">
						<h3 className="text-3xl font-semibold pt-4">Get in touch</h3>
						<p className="text-lg pb-8">
							We’d love to hear from you! Whether you have questions, feedback,
							or need assistance, our team is here to help.
						</p>

						<div className="flex items-start pb-8 gap-4">
							<PhoneCall className="inline" /> +977 98XXXXXXXX
						</div>
						<div className="flex items-start pb-8 gap-4">
							<Mail className="inline" /> contact@trackstaff.com
						</div>
						<div className="flex items-start pb-8 gap-4">
							<MapPin className="inline" /> TukiSoft Pvt Ltd, Sundar Marga,
							Pokhara, Nepal
						</div>

						<div className="flex items-start pt-16 gap-4">
							<a
								className="w-max p-2 rounded-full bg-track-dark hover:bg-white hover:text-track"
								href="https://www.facebook.com/trackstaff"
							>
								<Facebook size={24} />
							</a>
							<a
								className="w-max p-2 rounded-full bg-track-dark hover:bg-white hover:text-track"
								href="https://www.instagram.com/trackstaff"
							>
								<Instagram size={24} />
							</a>
							<a
								className="w-max p-2 rounded-full bg-track-dark hover:bg-white hover:text-track"
								href="https://www.twitter.com/trackstaff"
							>
								<Twitter size={24} />
							</a>
						</div>
					</div>
					<div className="flex flex-col justify-center space-y-4 p-2 md:p-8 rounded-xl md:w-3/5">
						<Form {...form} 
                        // onSubmit={form.handleSubmit()}
                        >
							<div className="flex flex-col lg:flex-row gap-4">
								<label className="block mb-4 w-full lg:w-1/2">
									First Name
									<Input
										type="text"
										className="mt-2 block w-full px-4 py-2 text-black bg-white border rounded-md"
										placeholder="Your First Name"
										required
									/>
								</label>
								<label className="block mb-4 w-full lg:w-1/2">
									Last Name
									<Input
										type="text"
										className="mt-2 block w-full px-4 py-2 text-black bg-white border rounded-md"
										placeholder="Your Last Name"
										required
									/>
								</label>
							</div>
							<div className="flex flex-col lg:flex-row gap-4">
								<label className="block mb-4 w-full lg:w-1/2">
									Email
									<Input
										type="email"
										className="mt-2 block w-full px-4 py-2 text-black bg-white border rounded-md"
										placeholder="you@example.com"
										required
									/>
								</label>
								<label className="block mb-4 w-full lg:w-1/2">
									Phone Number
									<Input
										type="tel"
										className="mt-2 block w-full px-4 py-2 text-black bg-white border rounded-md"
										placeholder="98XXXXXXXX"
										required
									/>
								</label>
							</div>
							<label className="block mb-4 w-full">
								Subject
								<Textarea
									className="mt-2 block w-full px-4 py-2 text-black bg-white border rounded-md"
									placeholder="Tell us more about your inquiry..."
									rows={5}
									required
								/>
							</label>
							<Button
								type="submit"
								className="block w-fit px-8 py-2 text-white bg-track border rounded-md ms-auto mt-12"
							>
								Send Message
							</Button>
						</Form>
					</div>
				</div>
			</main>
		</div>
	);
};

export default Contact;
