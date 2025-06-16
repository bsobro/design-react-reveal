import { useState } from "react";
import { MessageSquare, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { ReactNode } from "react";

interface OffcanvasProps {
	title?: string;
    children?: ReactNode;
}

const Offcanvas = ({ title, children }: OffcanvasProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const form = useForm();

	const toggleOffcanvas = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			{/* Button to toggle Offcanvas */}
			<Button
			id="chat-button"
				onClick={toggleOffcanvas}
				className="sticky bottom-5 left-full me-5 bg-track text-white px-4 py-2 rounded-md hover:bg-track-dark flex items-center gap-2 w-fit"
			>
				{isOpen ? <X /> : <MessageSquare fill="white" />} Message
			</Button>

			{/* Offcanvas Container */}
			<div
				className={`fixed flex flex-col bottom-20 right-0 h-1/2 max-w-[400px] w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
					isOpen ? "translate-x-0" : "translate-x-full"
				}`}
			>
				{/* Header */}
				<div className="flex justify-between items-center px-4 py-0 bg-track text-white">
					<h3 className="text-lg font-semibold">{title || "TrackStaff Help"}</h3>
					<Button onClick={toggleOffcanvas} className="bg-transparent text-white p-0 hover:bg-transparent [&_svg]:size-8">
						<X />
					</Button>
				</div>

				{/* Content */}
				<div className="p-4 overflow-y-auto flex flex-col justify-end h-full">
					{children}
					<Form {...form}>
						<div className="flex items-center gap-2">
							<Input
								type="text"
								className="flex-1 py-1 px-2 rounded-3xl border border-gray-200 shadow"
								placeholder="How can we help you?"
							/>
							<Button className="bg-track text-white rounded-sm py-1 px-3">
								Send
							</Button>
						</div>
					</Form>
				</div>
			</div>
		</>
	);
};

export default Offcanvas;
